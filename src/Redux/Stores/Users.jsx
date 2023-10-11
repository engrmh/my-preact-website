import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../../data.jsx";

export const getAllUserFromServer = createAsyncThunk(
  "Users/getAllUsersFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);

const usersSlice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      // fetch();
    },
    removeUser: (state, action) => {
      state.some((user) => {
        if (user.id === action.payload.id) {
          user = action.payload;
        }
      });
    },
    editUser: (state, action) => {},
    showUserPassword: (state, action) => {},
    resetUserPass: (state, action) => {},
  },
  extraReducers: {
    [getAllUserFromServer.fulfilled]: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const {
  addUser,
  removeUser,
  editUser,
  showUserPassword,
  resetUserPass,
} = usersSlice.actions;
export default usersSlice.reducer;

// const userReducer = (state = [], action) => {
//   switch (action.type) {
//     case addUser:
//       return [...state, action.payload];
//     case removeUser:
//       return [...state].filter((user) => user.id !== action.id);
//     case editUser: {
//       let currentState = [...state];
//       let newState = currentState;
//       return newState;
//     }
//     case showUserPassword: {
//       let userPassword;
//       [...state].some((user) => {
//         if (user.id === action.id) {
//           userPassword = user.password;
//         }
//       });
//       return userPassword;
//     }
//     case resetUserPass: {
//       [...state].some((user) => {
//         if (user.id === action.id) {
//           user.password = "12345678";
//         }
//       });
//     }
//     default:
//       return state;
//   }
// };
