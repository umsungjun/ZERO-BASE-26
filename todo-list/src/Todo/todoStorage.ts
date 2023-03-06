import { TodoTypes } from "./TodoReducer";

export const saveTodos = (todos: TodoTypes[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const loadTodos = () => {
  const todoJson = localStorage.getItem("todos");

  if (!todoJson) {
    return [];
  }

  try {
    return JSON.parse(todoJson);
  } catch (e) {
    console.log(e);
    return [];
  }
};
