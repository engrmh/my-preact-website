const addNewTask = "ADD_NEW_TASK";
const removeTask = "REMOVE_TASK";
const completeTask = "COMPLETE_TASK";

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case addNewTask:
      return [...state, action.payload];
    case removeTask:
      return [...state].filter((task) => task.id !== action.id);
    case completeTask: {
      let newTask = [...state];
      newTask.some((task) => {
        if (task.id === action.id) {
          task.isDone = !task.isDone;
        }
      });
      return newTask;
    }
    default:
      return state;
  }
};

export const addNewTaskAction = (title) => {
  return {
    type: addNewTask,
    payload: {
      id: crypto.randomUUID(),
      title,
      isDone: false,
    },
  };
};

export const removeTaskAction = (id) => {
  return {
    type: removeTask,
    id,
  };
};
export const completeTaskAction = (id) => {
  return {
    type: completeTask,
    id,
  };
};

export default taskReducer;
