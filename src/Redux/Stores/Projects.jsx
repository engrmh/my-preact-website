import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProjectFromServer = createAsyncThunk(
  "Projects/getAllProjectFromServer",
  async () => {
    return fetch("https://apptest.bashiridev.ir/api/Projects/GetProjects")
      .then((res) => res.json())
      .then((data) => data);
  }
);

const projectSlice = createSlice({
  name: "Projects",
  initialState: [],
  reducers: {
    addProject: (state, action) => {
      fetch("https://apptest.bashiridev.ir/api/Projects/PostProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((res) => res.json())
        .then((data) => data);
    },
    removeProject: (state, action) => {
      fetch(`https://apptest.bashiridev.ir/api/Projects/DeleteProject`, {
        method: "DELETE",
        body: JSON.stringify(action.payload),
      })
        .then((res) => res.json())
        .then((data) => data);
    },
    editProject: (state, action) => {
      console.log(action);
      fetch(`https://apptest.bashiridev.ir/api/Projects/PutProject`, {
        method: "PUT",
        body: JSON.stringify(action.payload.data),
      })
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
