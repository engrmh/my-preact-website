const addProject = "ADD_PROJECT";
const removeProject = "REMOVE_PROJECT";
const editProject = "EDIT_PROJECT";
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

export const addProjectAction = (data) => {
  return {
    type: addProject,
    payload: {
      id: crypto.randomUUID(),
      name: data.name,
      customer: data.customer,
      salary: data.salary,
      projectTechnologies: data.projectTechnologies,
      creator: data.creator,
      image: data.image,
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
