import React from "react";

import styles from "./TodoListTools.module.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

interface TodoListToolsProps {
  isAllChecked: boolean;
  onToggleAllClick: () => void;
  onRemoveAllClick: () => void;
}

export default function TodoListTools(props: TodoListToolsProps) {
  const handleToggleAllClick = () => {
    props.onToggleAllClick();
  };

  const handleRemoveAllClick = () => {
    props.onRemoveAllClick();
  };

  return (
    <section className={styles.container}>
      {props.isAllChecked ? (
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
