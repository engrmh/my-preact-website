import { Alert, Button, Col, Row } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SmsIcon from "@mui/icons-material/Sms";

export default function Users() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "First Name & Last Name",
      width: 250,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: false,
    },
    {
      field: "phone",
      headerName: "Phone Namber",
      type: "number",
      width: 120,
      editable: false,
    },
    {
      field: "userRol",
      headerName: "User Role",
      type: "text",
      width: 120,
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
            <div class="d-flex gap-1">
              <Button className="customBlue p-1 border-0">
                <VisibilityIcon />
              </Button>
              <Button className="customBlack p-1 border-0">
                <SmsIcon />
              </Button>
              <Button className="customGreen p-1 border-0">
                <EditIcon />
              </Button>
              <Button className="customBlack p-1 border-0">
                <RestartAltIcon />
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
      name: "Mohammad Hosein Salim Bahrami",
      email: "johndoe@gmail.com",
      phone: "09119193807",
      userRol: "admin",
    },
    {
      id: 2,
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "09119193807",
      userRol: "admin",
    },
    {
      id: 3,
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "09119193807",
      userRol: "admin",
    },
  ];

  // const rows = [];

  return (
    <Row className="mt-4">
      <Col xs={12} md={12} lg={12}>
        <div class="">
          <div class="p-3 d-flex justify-content-between align-items-center setShadow rounded bg-white mb-3">
            <span className="fs-5">Users</span>
            <Button className="p-2 customBlue customBlueHover border-0">
              Add New User
            </Button>
          </div>
          <div class="p-3 setShadow rounded bg-white">
            {rows.length === 0 ? (
              <Alert variant="warning" className="text-center">
                No user Found. Please Add New User
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
  );
}
