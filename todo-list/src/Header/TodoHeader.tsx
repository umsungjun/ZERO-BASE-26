import React from "react";
import { useTodoState } from "../Todo/TodoProvider";
import styles from "./TodoHeader.module.css"; //css 파일 import

export default function TodoHeader() {
  const todoState = useTodoState();
  const count = todoState.todos.length;
  return (
    <header>
      <h1>
        <mark className={styles.todoCount}>{count}</mark>개의 할일
      </h1>
    </header>
  );
}
