import React from "react";
import "./TodoInput.css";

import { RiChatNewLine } from "react-icons/ri"; //이모티콘

export default function TodoInput() {
  return (
    <section className="container">
      <form className="formContainer">
        <input className="input" />
        <button className="enter">
          <RiChatNewLine /> {/* 이모티콘은 컴포넌트 처럼 import */}
        </button>
      </form>
    </section>
  );
}
