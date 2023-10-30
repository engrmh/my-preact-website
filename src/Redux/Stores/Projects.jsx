import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const getAllProjectFromServer = createAsyncThunk(
  "Projects/getAllProjectFromServer",
  async () => {
    return fetch("https://apptest.bashiridev.ir/api/Projects/GetProjects")
      .then((res) => res.json())
      .then((data) => data);
  }
);
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

const userToken = getCookie("skylaxUserToken");

const projectSlice = createSlice({
  name: "Projects",
  initialState: [],
  reducers: {
    addProject: (state, action) => {
      fetch("https://apptest.bashiridev.ir/api/Projects/PostProject", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        // body: JSON.stringify(action.payload),
        body: action.payload,
      })
        .then((res) => res.json())
        .then((data) => data)
        .then(() => {
          Swal.fire("Added Successfully", "", "success");
        })
        // .catch(() => {
        //   Swal.fire("Server Error", "", "error");
        // });
    },
    removeProject: (state, action) => {
      fetch(
        `https://apptest.bashiridev.ir/api/Projects/DeleteProject?id=${action.payload}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data)
        .then(() => {
          Swal.fire("Removed Successfully", "", "success");
        })
        // .catch(() => {
        //   Swal.fire("Server Error", "", "error");
        // });
    },
    editProject: (state, action) => {
      fetch(
        `https://apptest.bashiridev.ir/api/Projects/PutProject/${action.payload.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify(action.payload.data),
        }
      )
        .then((res) => res.json())
        .then((data) => data)
        .then(() => {
          Swal.fire("Edited Successfully", "", "success");
        })
        // .catch(() => {
        //   Swal.fire("Server Error", "", "error");
        // });
    },
  },
  extraReducers: {
    [getAllProjectFromServer.fulfilled]: (state, action) => action.payload,
  },
});

export const { addProject, removeProject, editProject } = projectSlice.actions;
export default projectSlice.reducer;
