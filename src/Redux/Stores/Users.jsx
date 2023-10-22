import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsersFromServer = createAsyncThunk(
  "User/getAllUsersFromServer",
  async () => {
    return fetch("https://apptest.bashiridev.ir/api/User")
      .then((res) => res.json())
      .then((data) => data);
  }
);

const userTokenFromLocalStorage = localStorage.getItem('user')

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      fetch("https://apptest.bashiridev.ir/api/User", {
        method: "POST",
        headers: {
          'Authorization' : `Bearer ${userTokenFromLocalStorage}` ,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((res) => res.json())
        .then((data) => data);
    },
    removeUser: (state, action) => {
      fetch(`https://apptest.bashiridev.ir/api/User/${action.payload}`, {
        method: "DELETE",
        headers: {
          'Authorization' : `Bearer ${userTokenFromLocalStorage}` ,
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    },
    editUser: (state, action) => {
      fetch(`https://apptest.bashiridev.ir/api/User/${action.payload.id}`, {
        method: "PUT",
        headers: {
          'Authorization' : `Bearer ${userTokenFromLocalStorage}`
        },
        body: action.payload.data,
      })
        .then((res) => res.json())
        .then((data) => data);
    },
  },
  extraReducers: {
    [getAllUsersFromServer.fulfilled]: (state, action) => action.payload,
  },
});

export const { addUser, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;
