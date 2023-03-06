import {
  ReactNode,
  createContext,
  useReducer,
  Dispatch,
  useContext,
} from "react";
import {
  TodoInputActionType,
  todoInputReducer,
  TodoInputStateType,
} from "./todoInputReducer";
import { TodoActionType, todoReducer, TodoStateType } from "./TodoReducer";
import { loadTodos } from "./todoStorage";

interface TodoProviderProps {
  children: ReactNode;
}

const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(
  null
);
const InputTodoContext = createContext<TodoInputStateType | null>(null);
const InputTodoDispatchContext =
  createContext<Dispatch<TodoInputActionType> | null>(null);

export default function TodoProvider(props: TodoProviderProps) {
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: loadTodos(),
  });
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: "",
  });

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export const useTodoState = () => {
  //use라는 명치이 붙으면 hook이라고 생각하면 됨
  const value = useContext(TodoStateContext);
  if (!value) {
    //null인 경우
    throw new Error("can not find useTodoState");
  }
  return value;
};

export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext);
  if (!value) {
    //null인 경우
    throw new Error("can not find TodoDispatch");
  }
  return value;
};

export const useInputTodoState = () => {
  const value = useContext(InputTodoContext);
  if (!value) {
    //null인 경우
    throw new Error("can not find InputTodoState");
  }
  return value;
};

export const useInputTodoDispatch = () => {
  //use라는 명치이 붙으면 hook이라고 생각하면 됨
  const value = useContext(InputTodoDispatchContext);
  if (!value) {
    //null인 경우
    throw new Error("can not find InputTodoDispatch");
  }
  return value;
};
