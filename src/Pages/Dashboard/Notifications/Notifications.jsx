import { Alert, Button, Col, Row } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function Users() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: false,
    },
    {
      field: "message",
      headerName: "Message",
      width: 350,
      editable: false,
    },
    {
      field: "receivers",
      headerName: "Receivers",
      width: 120,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: false,
      renderCell: (params) => {
        if (params.value === "sent") {
          return <span className="text-success">{params.value}</span>;
        } else if (params.value === "progress") {
          return <span className="text-primary">{params.value}</span>;
        } else if (params.value === "unsent") {
          return <span className="text-danger">{params.value}</span>;
        }
      },
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
              {/*<Button className="customBlack p-1 border-0">*/}
              {/*  <SendIcon />*/}
              {/*</Button>*/}
              <Button className="customGreen p-1 border-0" disabled>
                <EditIcon />
              </Button>
              <Button className="customBlack p-1 border-0" disabled>
                <ContentCopyIcon />
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

  // const rows = [
  //   {
  //     id: 1,
  //     title: "Edit Mail Address",
  //     message: "Please check your email address and write truly",
  //     receivers: "users",
  //     status: "progress",
  //   },
  //   {
  //     id: 2,
  //     title: "Edit Mail Address",
  //     message: "Please check your email address and write truly",
  //     receivers: "users",
  //     status: "sent",
  //   },
  //   {
  //     id: 3,
  //     title: "Edit Mail Address",
  //     message: "Please check your email address and write truly",
  //     receivers: "users",
  //     status: "unsent",
  //   },
  // ];

  const rows = [];

  return (
    <Row className="mt-4">
      <Col xs={12} md={12} lg={12}>
        <div class="">
          <div class="p-3 d-flex justify-content-between align-items-center setShadow rounded bg-white mb-3">
            <span className="fs-5">Notifications</span>
            <Button className="p-2 customBlue customBlueHover border-0">
              Add New Notif
            </Button>
          </div>
          <div class="p-3 setShadow rounded bg-white">
            {rows.length === 0 ? (
              <Alert variant="warning" className="text-center">
                No notification Found. Please Add Notification
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
