const todoDB = [
  {
    id: 1,
    title: "do my homework",
    description: 'first "To do list" with NodeJS',
    completed: false,
  },
  {
    id: 2,
    title: "Do my laundry",
    description: "at my house",
    completed: false,
  },
  {
    id: 3,
    title: "Walk my dog",
    description: "to the park",
    completed: false,
  },
];

/*
   {
    id,
    title: '', 
    description: '',
    completed: false
    }
  */

const getAllMyTodos = () => {
  return todoDB;
};

const getTodoById = (id) => {
  const filteredDB = todoDB.filter((todoItem) => todoItem.id === id);
  return filteredDB[0];
};

const createTodo = (todoObj) => {
  if (todoDB.length === 0) {
    const newTodo = {
      id: 1,
      title: todoObj.title,
      description: todoObj.description,
      completed: todoObj.completed,
    };
    todoDB.push(newTodo);
    return newTodo;
  }
  const newTodo = {
    id: todoDB[todoDB.length - 1].id + 1,
    title: todoObj.title,
    description: todoObj.description,
    completed: todoObj.completed,
  };
  todoDB.push(newTodo);
  return newTodo;
};

const deleteTodoItem = (id) => {
  const index = todoDB.findIndex((item) => item.id === id);
  if (index !== -1) {
    todoDB.splice(index, 1);
    return true;
  }
};

const updateTodoItem = (id, data) => {
  const index = todoDB.findIndex((item) => item.id === id);
  if (data.title && data.description && data.completed) {
    todoDB[index] = {
      id,
      title: data.title,
      description: data.description,
      completed: data.completed
    };
    return todoDB[index]
  }
};

module.exports = {
  getAllMyTodos,
  getTodoById,
  createTodo,
  deleteTodoItem,
  updateTodoItem
};
