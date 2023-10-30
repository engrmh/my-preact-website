import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProjectFromServer = createAsyncThunk(
  "Projects/getAllProjectFromServer",
  async () => {
    return fetch("https://apptest.bashiridev.ir/api/Projects/GetProjects")
      .then((res) => res.json())
      .then((data) => data);
  }
);
function getCookie() {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return (userToken = cookieValue);
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
        body: JSON.stringify(action.payload),
        body: action.payload,
      })
        .then((res) => res.json())
        .then((data) => data);
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
        .then((data) => data);
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
        .then((data) => data);
    },
  },
  extraReducers: {
    [getAllProjectFromServer.fulfilled]: (state, action) => action.payload,
  },
});

export const { addProject, removeProject, editProject } = projectSlice.actions;
export default projectSlice.reducer;
