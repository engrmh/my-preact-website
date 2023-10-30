import { Alert, Button, Col, Row } from "react-bootstrap";
import { MrMiyagi } from "@uiball/loaders";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useState, useEffect } from "preact/hooks";
import DataHandlerModals from "../../../Components/Modals/DataHandlerModals.jsx";
import { useDispatch, useSelector } from "react-redux";
import AbcIcon from "@mui/icons-material/Abc";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EventIcon from "@mui/icons-material/Event";
import Swal from "sweetalert2";
import {
  addTask,
  editTask,
  getAllTasksFromServer,
  removeTask,
} from "../../../Redux/Stores/Tasks";

export default function Tasks() {
  const [openingModal, setOpeningModal] = useState(false);
  const [typeOfModal, setTypeOfModal] = useState("");
  const [taskName, setTaskName] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [completeAt, setCompleteAt] = useState("");
  const [taskID, setTaskID] = useState(null);
  const [showAllData, setShowAllData] = useState(false);
  const dispatch = useDispatch();
  const allTasksFormServer = useSelector((state) => state.tasks);
  const [allTasks, setAllTasks] = useState(allTasksFormServer);

  let newTask = {
    title: taskName,
    createAt: createAt,
    completeAt: "",
  };

  useEffect(() => {
    dispatch(getAllTasksFromServer());
    setAllTasks(allTasksFormServer);
    setCreateAt(
      `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`
    );
    setCompleteAt(
      `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`
    );
  }, []);

  useEffect(() => {
    dispatch(getAllTasksFromServer());
    setAllTasks(allTasksFormServer);
  }, [useSelector((state) => state.tasks)]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 400,
      editable: false,
    },
    {
      field: "createAt",
      headerName: "Create At",
      width: 150,
      editable: false,
    },
    {
      field: "completeAt",
      headerName: "Complete At",
      width: 150,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      editable: false,
      renderCell: (params) => {
        // console.log(params);
        if (params.row.completeAt !== "") {
          return <span className="text-success">completed</span>;
        } else if (params.row.completeAt === "") {
          return <span className="text-primary">in progress</span>;
        }
      },
    },
    {
      field: "action",
      headerName: "Actions",
      // description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            <div className="d-flex gap-1">
              <Button
                className="customGreen p-1 border-0"
                disabled={params.row.completeAt !== "" && true}
                onClick={() => {
                  setTaskID(params.row.id);
                  setCompleteAt(
                    `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`
                  );
                  let updateTask = {
                    id: params.row.id,
                    title: params.row.title,
                    createAt: params.row.createAt,
                    completeAt: completeAt,
                  };
                  dispatch(
                    editTask({
                      data: updateTask,
                      id: taskID,
                    })
                  );
                }}
              >
                <DoneIcon />
              </Button>
              <Button
                className="customBlue p-1 border-0"
                disabled={params.row.completeAt !== "" && true}
                onClick={() => {
                  setTaskID(params.row.id);
                  setTaskName(params.row.title);
                  setCreateAt(params.row.createAt);
                  setCompleteAt(params.row.completeAt);
                  setOpeningModal(true);
                  setTypeOfModal("edit");
                }}
              >
                <EditIcon />
              </Button>
              <Button
                className="customRed p-1 border-0"
                onClick={() => {
                  deleteHandler(params);
                  setTaskID(params.row.id);
                }}
              >
                <DeleteIcon />
              </Button>
            </div>
          </div>
        );
      },
    },
  ];

  const modalStatusHandler = (status) => {
    setOpeningModal(status);
  };

  let currentDay = new Date().getDay();
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  const submitHandler = (action) => {
    if (typeOfModal === "add") {
      if (action) {
        setCreateAt(`${currentYear}-${currentMonth}-${currentDay}`);
        dispatch(addTask(newTask));
        setTaskName("");
        setCreateAt("");
        setOpeningModal(false);
        dispatch(getAllTasksFromServer());
      }
    }
    if (typeOfModal === "edit") {
      let updateTask = {
        id: taskID,
        title: taskName,
        createAt: createAt,
        completeAt: completeAt,
      };
      if (action) {
        dispatch(
          editTask({
            data: updateTask,
            id: taskID,
          })
        );
        setTaskName("");
        setCreateAt("");
        setCompleteAt("");
        setOpeningModal(false);
      }
    }
  };

  const deleteHandler = (data) => {
    Swal.fire({
      title: "Are you sure to remove this task?",
      showDenyButton: true,
      confirmButtonText: "Yes,Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeTask(data.row.id));
        setShowAllData(false);
        dispatch(getAllTasksFromServer());
      } else if (result.isDenied) {
        Swal.fire("Canceled", "", "info");
      }
    });
  };

  setTimeout(() => {
    setShowAllData(true);
  }, 2000);

  return (
    <>
      <Row className="mt-4">
        <Col xs={12} md={12} lg={12}>
          <div className="">
            <div className="p-3 d-flex justify-content-between align-items-center setShadow rounded bg-white mb-3">
              <span className="fs-5">Tasks</span>
              <Button
                className="p-2 customBlue customBlueHover border-0"
                onClick={() => {
                  setOpeningModal(true);
                  setTypeOfModal("add");
                  setCreateAt(
                    `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`
                  );
                }}
              >
                Add New Task
              </Button>
            </div>
            <div className="p-3 setShadow rounded bg-white">
              {allTasks.length === 0 ? (
                <Alert variant="warning" className="text-center">
                  No Tasks Found. Please Add New Task
                </Alert>
              ) : (
                <>
                  {showAllData ? (
                    <Box sx={{ height: "100%", width: "100%" }}>
                      <DataGrid
                        rows={allTasks}
                        columns={columns}
                        initialState={{
                          pagination: {
                            paginationModel: {
                              pageSize: 6,
                            },
                          },
                        }}
                        pageSizeOptions={[6]}
                        // checkboxSelection
                        disableRowSelectionOnClick
                      />
                    </Box>
                  ) : (
                    <>
                      <div className="d-flex justify-content-center align-items-center">
                        <MrMiyagi
                          size={35}
                          lineWeight={3.5}
                          speed={1}
                          color="black"
                        />
                        <span className="ms-2">Loading...</span>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </Col>
      </Row>
      {openingModal && (
        <DataHandlerModals
          modalTitle="Add New Task"
          modalType={typeOfModal}
          showStatus={openingModal}
          sendCloseData={(modalStatus) => modalStatusHandler(modalStatus)}
          onSubmitingData={(action) => submitHandler(action)}
        >
          <form
            // enctype="multipart/form-data"
            onSubmit={(action) => {
              action.preventDefault();
              submitHandler(action);
            }}
          >
            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
                <AbcIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
                <input
                  type="text"
                  className="border-0 bg-transparent p-1 w-100 systemInput"
                  placeholder="Task Name"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>
              <div className="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
                <EventIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
                <input
                  type="text"
                  className="border-0 bg-transparent p-1 w-100 systemInput"
                  value={createAt}
                  disabled
                />
              </div>
            </div>
          </form>
        </DataHandlerModals>
      )}
    </>
  );
}
