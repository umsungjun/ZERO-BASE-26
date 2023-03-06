import React, { ReactNode } from "react";

interface TodoListAreaProps {
  children: ReactNode;
  todoCount: number;
}

export default function TodoListArea(props: TodoListAreaProps) {
  if (props.todoCount < 1) {
    // todoList의 등록된 것이 없다면 프래그먼트를 return
    return null;
  }

  return <>{props.children}</>;
}
