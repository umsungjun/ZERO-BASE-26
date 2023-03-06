import React from "react";

import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useTodoDispatch } from "../Todo/TodoProvider";
import styles from "./TodoItem.module.css";

interface TOdoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export default function TodoItem(props: TOdoItemProps) {
  const todoDispatch = useTodoDispatch();
  // const handleRemove = (id: number) => {
  //   // console.log("remove", id);
  //
  //   });
  // };
  // const handleToggle = (id: number) => {
  //   // console.log(newTodos);
  //
  // };

  const handleToggleClick = () => {
    todoDispatch({
      type: "checked",
      payload: {
        id: props.id,
      },
    });
  };
  const handleRemoveClick = () => {
    todoDispatch({
      type: "remove",
      payload: {
        id: props.id,
      },
    });
  };
  return (
    <li className={styles.container}>
      <BsCheckCircle
        onClick={handleToggleClick} // toggle버튼을 onClick하면 handleToggleClick이 실행
        className={
          props.isChecked
            ? [styles.checkedCircleIcon, styles.checkIcon].join(" ")
            : [styles.unCheckedCircleIcon, styles.checkIcon].join(" ")
        }
      />
      <span className={props.isChecked ? styles.strikeThrough : ""}>
        {props.text}
      </span>
      <IoIosRemoveCircleOutline
        onClick={handleRemoveClick}
        className={styles.removeIcon}
      />
    </li>
  );
}
