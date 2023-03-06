import React from "react";

import styles from "./TodoListTools.module.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useTodoDispatch, useTodoState } from "../Todo/TodoProvider";

export default function TodoListTools() {
  const todoState = useTodoState();
  const todoDispatch = useTodoDispatch();

  const isTodoAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked); // 하나라도 체크가 되어있다면 true
  };

  const handleToggleAllClick = () => {
    todoDispatch({
      type: "allChecked",
      payload: isTodoAllChecked(),
    });
  };

  const handleRemoveAllClick = () => {
    todoDispatch({
      type: "allRemove",
    });
  };

  return (
    <section className={styles.container}>
      {isTodoAllChecked() ? (
        <button
          className={styles.button}
          style={{ color: "red" }}
          onClick={handleToggleAllClick}
        >
          <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon} />
          전체해체
        </button>
      ) : (
        <button className={styles.button} onClick={handleToggleAllClick}>
          <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon} />
          전체완료
        </button>
      )}
      <button
        onClick={handleRemoveAllClick}
        className={[styles.button, styles.removeAllButton].join(" ")}
      >
        {/* class명을 띄어서 줘야하기 때문에 []안에 넣고 join(' ')을 줘야 함 */}
        <MdDelete className={styles.removeAllIcon} />
        전체삭제
      </button>
    </section>
  );
}
