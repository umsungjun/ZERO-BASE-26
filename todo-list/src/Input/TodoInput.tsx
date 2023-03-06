import React, { ChangeEvent, FormEvent } from "react";
import styles from "./TodoInput.module.css";

import { RiChatNewLine } from "react-icons/ri"; //이모티콘
import {
  useInputTodoDispatch,
  useInputTodoState,
  useTodoDispatch,
} from "../Todo/TodoProvider";

export default function TodoInput() {
  const todoDispatch = useTodoDispatch();
  const inputDispatch = useInputTodoDispatch();
  const inputState = useInputTodoState();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: "change", //type은 change로 해서
      payload: event.target.value, //입력된 테스트
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // submit의 기본 동작을 막음

    if (!inputState.text) return;

    todoDispatch({
      type: "add",
      payload: {
        text: inputState.text,
      },
    });
    // setTodos(newTodos);
    // setText(""); // todo가 등록되면 입력창을 비움
    inputDispatch({
      type: "clear",
    });
  };

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        {/* button type을 submit으로 두고 누르면 onSubmit event가 발생됨 */}
        <input
          className={styles.input}
          placeholder="해야할 Todo"
          value={
            inputState.text
          } /* input의 value는 App.tsx에서 넘어온 useState의 text */
          onChange={handleInputChange}
        />
        <button type="submit" className={styles.enter}>
          <RiChatNewLine /> {/* 이모티콘은 컴포넌트 처럼 import */}
        </button>
      </form>
    </section>
  );
}
