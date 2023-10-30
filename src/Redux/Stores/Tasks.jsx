import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllTasksFromServer = createAsyncThunk(
  "Task/getAllTasksFromServer",
  async () => {
    return fetch("https://apptest.bashiridev.ir/api/Task/GetTasks")
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

const taskSlice = createSlice({
  name: "Task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      fetch("https://apptest.bashiridev.ir/api/Task/PostTask", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((res) => res.json())
        .then((data) => data)
        .then(() => {
          Swal.fire("Added Successfully", "", "success");
        })
        .catch(() => {
          Swal.fire("Server Error", "", "error");
        });
    },
    removeTask: (state, action) => {
      fetch(
        `https://apptest.bashiridev.ir/api/Task/DeleteTask/${action.payload}`,
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
        .catch(() => {
          Swal.fire("Server Error", "", "error");
        });
    },
    editTask: (state, action) => {
      fetch(
        `https://apptest.bashiridev.ir/api/Task/PutTask/${action.payload.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(action.payload.data),
        }
      )
        .then((res) => res.json())
        .then((data) => data)
        .then(() => {
          Swal.fire("Edited Successfully", "", "success");
        })
        .catch(() => {
          Swal.fire("Server Error", "", "error");
        });
    },
  },
  extraReducers: {
    [getAllTasksFromServer.fulfilled]: (state, action) => action.payload,
  },
});

export const { addTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
