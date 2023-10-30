import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const getAllUsersFromServer = createAsyncThunk(
  "User/getAllUsersFromServer",
  async () => {
    return fetch("https://apptest.bashiridev.ir/api/User")
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

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      fetch("https://apptest.bashiridev.ir/api/User", {
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
    removeUser: (state, action) => {
      fetch(`https://apptest.bashiridev.ir/api/User/${action.payload}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data)
        .then(() => {
          Swal.fire("Removed Successfully", "", "success");
        })
        .catch(() => {
          Swal.fire("Server Error", "", "error");
        });
    },
    editUser: (state, action) => {
      fetch(`https://apptest.bashiridev.ir/api/User/${action.payload.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        body: action.payload.data,
      })
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
    [getAllUsersFromServer.fulfilled]: (state, action) => action.payload,
  },
});

export const { addUser, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;
