import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllTasksFromServer = createAsyncThunk(
  "Task/getAllTasksFromServer",
  async () => {
    return fetch("https://apptest.bashiridev.ir/api/Task/GetTasks")
      .then((res) => res.json())
      .then((data) => data);
  }
);

const taskSlice = createSlice({
  name: "Task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      fetch("https://apptest.bashiridev.ir/api/Task/PostTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((res) => res.json())
        .then((data) => data);
    },
    removeTask: (state, action) => {
      fetch(
        `https://apptest.bashiridev.ir/api/Task/DeleteTask/${action.payload}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => data);
    },
    editTask: (state, action) => {
      fetch(
        `https://apptest.bashiridev.ir/api/Task/PutTask/${action.payload.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(action.payload.data),
        }
      )
        .then((res) => res.json())
        .then((data) => data);
    },
  },
  extraReducers: {
    [getAllTasksFromServer.fulfilled]: (state, action) => action.payload,
  },
});

export const { addTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
