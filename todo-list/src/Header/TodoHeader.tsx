import React from "react";
import styles from "./TodoHeader.module.css"; //css 파일 import

interface TodoHeaderProps {
  count: number;
}

export default function TodoHeader(props: TodoHeaderProps) {
  return (
    <header>
      <h1>
        <mark className={styles.todoCount}>{props.count}</mark>개의 할일
      </h1>
    </header>
  );
}
