import { Alert, Button, Col, Row } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useState, useEffect } from "preact/hooks";
import DataHandlerModals from "../../../Components/Modals/DataHandlerModals.jsx";
import { useDispatch } from "react-redux";
import { addProjectAction } from "../../../Redux/Stores/Projects.jsx";
import AbcIcon from "@mui/icons-material/Abc";
import PersonIcon from "@mui/icons-material/Person";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import EngineeringIcon from "@mui/icons-material/Engineering";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

export default function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [openingModal, setOpeningModal] = useState(false);
  const [typeOfModal, setTypeOfModal] = useState("");
  const [projectName, setProjectName] = useState("");
  const [customer, setCustomer] = useState("");
  const [salary, setSalary] = useState(null);
  const [projectTechnologies, setProjectTechnologies] = useState("");
  const [creator, setCreator] = useState("");
  const [projectPhoto, setProjectPhoto] = useState(
    "https://picsum.photos/seed/picsum/200/300"
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProjectFromServer();
  }, []);

  const getAllProjectFromServer = () => {
    fetch("https://apptest.bashiridev.ir/api/Projects/GetProjects")
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 150,
      editable: true,
    },
    {
      field: "salary",
      headerName: "Salary",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "projectTechnologies",
      headerName: "Technologies",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "creator",
      headerName: "Creator",
      // description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = allProjects;

  const modalStatusHandler = (status) => {
    setOpeningModal(status);
  };

  const submitHandler = (action) => {
    if (action) {
      let newProject = {
        name,
        customer,
        salary,
        projectTechnologies,
        creator,
        image: projectPhoto,
      };
      dispatch(addProjectAction(newProject));
      getAllProjectFromServer();
      setProjectName("");
      setCustomer("");
      setSalary(0);
      setProjectTechnologies("");
      setCreator("");
      setProjectPhoto("");
    }
  };

  return (
    <>
      <Row className="mt-4">
        <Col xs={12} md={12} lg={12}>
          <div class="">
            <div class="p-3 d-flex justify-content-between align-items-center setShadow rounded bg-white mb-3">
              <span className="fs-5">Projects</span>
              <Button
                className="p-2 customBlue customBlueHover border-0"
                onClick={() => {
                  setOpeningModal(true);
                  setTypeOfModal("add");
                }}
              >
                Add New Project
              </Button>
            </div>
            <div class="p-3 setShadow rounded bg-white">
              {rows.length === 0 ? (
                <Alert variant="warning" className="text-center">
                  No Project Found. Please Add New Project
                </Alert>
              ) : (
                <Box sx={{ height: 400, width: "100%" }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 6,
                        },
                      },
                    }}
                    pageSizeOptions={[6]}
                    checkboxSelection
                    disableRowSelectionOnClick
                  />
                </Box>
              )}
            </div>
          </div>
        </Col>
      </Row>
      {openingModal && (
        <DataHandlerModals
          modalTitle="Add New Project"
          modalType={typeOfModal}
          showStatus={openingModal}
          sendCloseData={(modalStatus) => modalStatusHandler(modalStatus)}
          onSubmitingData={(action) => submitHandler(action)}
        >
          <div class="d-flex flex-column gap-2">
            <div class="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
              <AbcIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
              <input
                type="text"
                className="border-0 bg-transparent p-1 w-100 systemInput"
                placeholder="Ppoject Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div class="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
              <PersonIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
              <input
                type="text"
                className="border-0 bg-transparent p-1 w-100 systemInput"
                placeholder="Customer"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
              <MonetizationOnIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
              <input
                type="number"
                inputMode="numeric"
                className="border-0 bg-transparent p-1 w-100 systemInput"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
              <AutoFixHighIcon className="me-2 fs-2 customRed text-white rounded-circle p-1 " />
              <input
                type="text"
                className="border-0 bg-transparent p-1 w-100 systemInput"
                placeholder="Ppoject Technologies (Use , to separate)"
                value={projectTechnologies}
                onChange={(e) => setProjectTechnologies(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
              <EngineeringIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
              <input
                type="text"
                className="border-0 bg-transparent p-1 w-100 systemInput"
                placeholder="Creator"
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center bg-secondary bg-opacity-25 p-2 rounded">
              <InsertPhotoIcon className="me-2 fs-2 customRed text-white rounded-circle p-1" />
              <input
                type="file"
                className="border-0 bg-transparent p-1 w-100 systemInput"
                placeholder="Ppoject Photo"
                accept="image/png, image/jpeg, image/jpg"
                value={projectPhoto}
                onChange={(e) => setProjectPhoto(e.target.value)}
              />
            </div>
          </div>
        </DataHandlerModals>
      )}
    </>
  );
}
