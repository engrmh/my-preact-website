const addProject = "ADD_PROJECT";
const removeProject = "REMOVE_PROJECT";
const editProject = "EDIT_PROJECT";
const getAllProject = "GET_ALL_PROJECT";
const projectReducer = (state = [], action) => {
  switch (action.type) {
    case addProject: {
      return fetch("https://apptest.bashiridev.ir/api/Projects/PostProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }).then((res) => res.json());

      // return [...state, action.payload];
    }
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

export const getAllProjectAction = () => {
  return {
    type: removeProject,
  };
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
