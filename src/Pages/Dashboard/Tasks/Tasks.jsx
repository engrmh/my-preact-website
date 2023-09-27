import { Alert, Button, Col, Row } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Tasks() {
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
        console.log(params.value);
        if (params.value === "completed") {
          return <span className="text-success">{params.value}</span>;
        } else if (params.value === "progress") {
          return <span className="text-primary">{params.value}</span>;
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
            <div class="d-flex gap-1">
              <Button className="customGreen p-1 border-0">
                <DoneIcon />
              </Button>
              <Button className="customBlue p-1 border-0">
                <EditIcon />
              </Button>
              <Button className="customRed p-1 border-0">
                <DeleteIcon />
              </Button>
            </div>
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      title: "Edit Mail Address",
      createAt: "",
      completeAt: "",
      status: "completed",
    },
    {
      id: 2,
      title: "Edit Mail Address",
      createAt: "",
      completeAt: "",
      status: "progress",
    },
    {
      id: 3,
      title: "Edit Mail Address",
      createAt: "",
      completeAt: "",
      status: "progress",
    },
  ];

  // const rows = [];

  return (
    <Row className="mt-4">
      <Col xs={12} md={12} lg={12}>
        <div class="">
          <div class="p-3 d-flex justify-content-between align-items-center setShadow rounded bg-white mb-3">
            <span className="fs-5">Tasks</span>
            <Button className="p-2 customBlue customBlueHover border-0">
              Add New Task
            </Button>
          </div>
          <div class="p-3 setShadow rounded bg-white">
            {rows.length === 0 ? (
              <Alert variant="warning" className="text-center">
                No Task Found. Please Add New Task
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
                  // checkboxSelection
                  disableRowSelectionOnClick
                />
              </Box>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
}
