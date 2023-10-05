const addNotif = "ADD_NOTIFS";
const removeNotif = "REMOVE_NOTIFS";
const editNotif = "EDIT_NOTIFS";
const showNotif = "EDIT_NOTIFS";
const notifReducer = (state = [], action) => {
  switch (action.type) {
    case addNotif:
      return [...state, action.payload];
    case removeNotif:
      return [...state].filter((notif) => notif.id !== action.id);
    case editNotif: {
      let currentState = [...state];
      let newState = currentState.some((notif) => {
        if (notif.id === action.payload.id) {
          notif = action.payload;
        }
      });
      return newState;
    }
    case showNotif: {
      let currentNotif = {};
      [...state].some((notif) => {
        if (notif.id === action.id) {
          currentNotif = notif;
        }
      });
      return currentNotif;
    }
    default:
      return state;
  }
};

export const addNotifAction = (title, desc, receiver) => {
  return {
    type: addNotif,
    payload: {
      id: crypto.randomUUID(),
      title,
      desc,
      receiver,
      status: "progress",
    },
  };
};
export const removeNotifAction = (id) => {
  return {
    type: removeNotif,
    id,
  };
};
export const editNotifAction = (id) => {
  return {
    type: editNotif,
    id,
  };
};

export const showNotifAction = (id) => {
  return {
    type: showNotif,
    id,
  };
};

export default notifReducer;
