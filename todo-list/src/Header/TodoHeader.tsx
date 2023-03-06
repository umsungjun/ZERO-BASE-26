import React from "react";
import "./TodoHeader.css"; //css 파일 import

export default function TodoHeader() {
  return (
    <header>
      <h1 className="headerTitle">
        <mark className="todoCount">5</mark>개의 할일
      </h1>
    </header>
  );
}
