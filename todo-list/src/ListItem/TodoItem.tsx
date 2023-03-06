import React from "react";

import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import styles from "./TodoItem.module.css";

interface TOdoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
  onToggleClick: (id: number) => void; // void는 return 값이 없다는 의미
  onRemoveClick: (id: number) => void;
}

export default function TodoItem(props: TOdoItemProps) {
  const handleToggleClick = () => {
    props.onToggleClick(props.id); // props로 받은 함수 onToggleClick에
  };
  const handleRemoveClick = () => {
    props.onRemoveClick(props.id);
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
