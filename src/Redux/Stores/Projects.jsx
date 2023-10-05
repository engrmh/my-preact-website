const addProject = "ADD_ROJECT";
const removeProject = "REMOVE_ROJECT";
const editProject = "EDIT_ROJECT";
const projectReducer = (state = [], action) => {
  switch (action.type) {
    case addProject:
      return [...state, action.payload];
    case removeProject:
      return [...state].filter((project) => project.id !== action.id);
    case editProject: {
      let currentState = [...state];
      let newState = currentState.some((project) => {
        if (project.id === action.payload.id) {
          project = action.payload;
        }
      });
      return newState;
    }
    default:
      return state;
  }
};

export const addProjectAction = (title, desc, basedOn) => {
  return {
    type: addProject,
    payload: {
      id: crypto.randomUUID(),
      title,
      desc,
      basedOn,
    },
  };
};
export const removeProjectAction = (id) => {
  return {
    type: removeProject,
    id,
  };
};
export const editProjectAction = (id) => {
  return {
    type: editProject,
    id,
  };
};

export default projectReducer;
