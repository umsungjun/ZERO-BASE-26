import React, { ReactNode } from "react";
import { useTodoState } from "../Todo/TodoProvider";

interface TodoListAreaProps {
  children: ReactNode;
}

export default function TodoListArea(props: TodoListAreaProps) {
  const todoState = useTodoState();
  if (todoState.todos.length < 1) {
    // todoList의 등록된 것이 없다면 프래그먼트를 return
    return null;
  }

  return <>{props.children}</>;
}
