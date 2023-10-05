const addUser = "ADD_USER";
const removeUser = "REMOVE_USER";
const editUser = "EDIT_USER";
const showUserPassword = "SHOW_USER_PASSWORD";
const resetUserPass = "RESET_USER_PASSWORD";
// const sendSmsToUser = "SEND_SMS_USER";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case addUser:
      return [...state, action.payload];
    case removeUser:
      return [...state].filter((user) => user.id !== action.id);
    case editUser: {
      let currentState = [...state];
      let newState = currentState.some((user) => {
        if (user.id === action.payload.id) {
          user = action.payload;
        }
      });
      return newState;
    }
    case showUserPassword: {
      let userPassword;
      [...state].some((user) => {
        if (user.id === action.id) {
          userPassword = user.password;
        }
      });
      return userPassword;
    }
    case resetUserPass: {
      [...state].some((user) => {
        if (user.id === action.id) {
          user.password = "12345678";
        }
      });
    }
    default:
      return state;
  }
};

export const addUserAction = (firsName, lastName, phoneNumber, email) => {
  return {
    type: addUser,
    payload: {
      id: crypto.randomUUID(),
      firsName,
      lastName,
      phoneNumber,
      email,
    },
  };
};
export const removeUserAction = (id) => {
  return {
    type: removeUser,
    id,
  };
};
export const editUserAction = (id) => {
  return {
    type: removeUser,
    id,
  };
};
export const showUserPasswordAction = (id) => {
  return {
    type: removeUser,
    id,
  };
};

export default userReducer;
