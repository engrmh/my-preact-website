import { Alert, Button, Col, Row } from "react-bootstrap";
import { MrMiyagi } from "@uiball/loaders";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useState, useEffect } from "preact/hooks";
import DataHandlerModals from "../../../Components/Modals/DataHandlerModals.jsx";
import { useDispatch, useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BadgeIcon from "@mui/icons-material/Badge";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Swal from "sweetalert2";
import {
  addUser,
  editUser,
  getAllUsersFromServer,
  removeUser,
} from "../../../Redux/Stores/Users.jsx";

export default function Users() {
  const [openingModal, setOpeningModal] = useState(false);
  const [typeOfModal, setTypeOfModal] = useState("");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userRol, setUserRol] = useState("user");
  const [userPassword, setUserPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userID, setUserID] = useState(null);
  const [showAllData, setShowAllData] = useState(false);
  const dispatch = useDispatch();
  const allUsersFromServer = useSelector((state) => state.users);
  const [allUsers, setAllUsers] = useState(allUsersFromServer);

  let newUser = {
    email,
    userName,
    roleTitle: userRol,
    password: userPassword,
  };

  // console.log(useSelector((state) => state.tasks));

  useEffect(() => {
    dispatch(getAllUsersFromServer());
    setAllUsers(allUsers);
  }, []);

  useEffect(() => {
    dispatch(getAllUsersFromServer());
    setAllUsers(allUsersFromServer);
  }, [useSelector((state) => state.users)]);

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    {
      field: "userName",
      headerName: "UserName",
      width: 200,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
      editable: false,
    },
    {
      field: "roleTitle",
      headerName: "User Role",
      type: "text",
      width: 200,
      editable: false,
    },
    {
      field: "action",
      headerName: "Actions",
      // description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <div className="d-flex gap-1">
              <Button
                className="customGreen p-1 border-0"
                onClick={() => {
                  setUserID(params.row.id);
                }}
              >
                <VisibilityIcon />
              </Button>
              <Button
                className="customBlue p-1 border-0"
                onClick={() => {
                  setUserID(params.row.id);
                  setEmail(params.row.email);
                  setUserName(params.row.userName);
                  setUserRol(params.row.rolTitle);
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
                  setUserID(params.row.id);
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

  const submitHandler = (action) => {
    if (typeOfModal === "add") {
      if (action) {
        console.log(newUser);
        dispatch(addUser(newUser));
        setUserName("");
        setEmail("");
        setUserRol("");
        setUserPassword("");
        setOpeningModal(false);
        dispatch(getAllUsersFromServer());
      }
    }
    if (typeOfModal === "edit") {
      let updateUser = {
        email,
        userName,
        rolTitle: userRol,
        password: userPassword,
      };
      if (action) {
        dispatch(
          editUser({
            data: updateUser,
            id: userID,
          })
        );
        setUserName("");
        setEmail("");
        setUserRol("");
        setUserPassword("");
        setOpeningModal(false);
      }
    }
  };

  const deleteHandler = (data) => {
    Swal.fire({
      title: "Are you sure to remove this User?",
      showDenyButton: true,
      confirmButtonText: "Yes,Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeUser(data.row.id));
        setShowAllData(false);
        dispatch(getAllUsersFromServer());
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
              <span className="fs-5">User</span>
              <Button
                className="p-2 customBlue customBlueHover border-0"
                onClick={() => {
                  setOpeningModal(true);
                  setTypeOfModal("add");
                }}
              >
                Add New User
              </Button>
            </div>
            <div className="p-3 setShadow rounded bg-white">
              {allUsers.length === 0 ? (
                <Alert variant="warning" className="text-center">
                  No User Found. Please Add New User
                </Alert>
              ) : (
                <>
                  {showAllData ? (
                    <Box sx={{ height: "100%", width: "100%" }}>
                      <DataGrid
                        rows={allUsers}
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
          modalTitle="Add New User"
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
                <AlternateEmailIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
                <input
                  type="text"
                  className="border-0 bg-transparent p-1 w-100 systemInput"
                  placeholder="Email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
                <BadgeIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
                <input
                  type="text"
                  className="border-0 bg-transparent p-1 w-100 systemInput"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
                <KeyIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
                <input
                  type={isShowPassword ? "text" : "password"}
                  className="border-0 bg-transparent p-1 w-100 systemInput"
                  placeholder="********"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                {isShowPassword ? (
                  <VisibilityIcon
                    className="me-2 fs-2 text-white rounded-circle p-1"
                    onClick={() => setIsShowPassword(false)}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="me-2 fs-2 text-white rounded-circle p-1"
                    onClick={() => setIsShowPassword(true)}
                  />
                )}
              </div>
              <div className="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
                <AdminPanelSettingsIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
                <select
                  className="form-select border-0 bg-transparent p-1 w-100 systemInput text-white"
                  aria-label="Small select example"
                  value={userRol}
                  onChange={(e) => setUserRol(e.target.value)}
                >
                  {/*<option selected value='-1'>Open this select menu</option>*/}
                  <option value="admin">Admin</option>
                  <option value="user" selected>
                    User
                  </option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            </div>
          </form>
        </DataHandlerModals>
      )}
    </>
  );
}
