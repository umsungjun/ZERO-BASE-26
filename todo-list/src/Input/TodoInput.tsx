import React, { ChangeEvent, FormEvent } from "react";
import styles from "./TodoInput.module.css";

import { RiChatNewLine } from "react-icons/ri"; //이모티콘

interface TodoInputProps {
  text: string;
  onTextChange: (text: string) => void;
  onSubmit: () => void;
}

export default function TodoInput(props: TodoInputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    //input에 onChange가 발생하면 실행되는 함수
    // console.log(event.target.value);
    props.onTextChange(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // submit의 기본 동작을 막음
    props.onSubmit();
  };

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        {/* button type을 submit으로 두고 누르면 onSubmit event가 발생됨 */}
        <input
          className={styles.input}
          placeholder="해야할 Todo"
          value={
            props.text
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
