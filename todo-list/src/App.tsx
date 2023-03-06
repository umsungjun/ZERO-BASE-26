import React, { useState, useReducer } from "react";
import "./App.css";
import Divider from "./Divider/Divider";
import TodoHeader from "./Header/TodoHeader";
import TodoInput from "./Input/TodoInput";
import TodoList from "./List/TodoList";
import TodoListArea from "./List/TodoListArea";
import { todoInputReducer } from "./Todo/todoInputReducer";
import { todoReducer } from "./Todo/TodoReducer";

import TodoListTools from "./Tools/TodoListTools";

function App() {
  // const [text, setText] = useState("");
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: "",
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });

  const handleTextChange = (text: string) => {
    //TodoInput에서 넘겨준 event.target.value를 매개변수 text로 받아서
    inputDispatch({
      type: "change", //type은 change로 해서
      payload: text, //입력된 테스트
    });
    // setText(text);
  };

  const handleSubmit = () => {
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

  const handleRemove = (id: number) => {
    // console.log("remove", id);
    todoDispatch({
      type: "remove",
      payload: {
        id: id,
      },
    });
  };
  const handleToggle = (id: number) => {
    // console.log(newTodos);
    todoDispatch({
      type: "checked",
      payload: {
        id: id,
      },
    });
  };

  const isTodoAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked); // 하나라도 체크가 되어있다면 true
  };

  const handleToggleAllClick = () => {
    const isAllChecked = isTodoAllChecked();

    todoDispatch({
      type: "allChecked",
      payload: isAllChecked,
    });
  };

  const handleRemoveAllClick = () => {
    // console.log("전체 삭제");
    todoDispatch({
      type: "allRemove",
    });
  };

  return (
    <main className="App">
      <TodoHeader count={todoState.todos.length} />
      <TodoInput
        text={inputState.text}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <TodoListArea todoCount={todoState.todos.length}>
        <TodoListTools
          isAllChecked={isTodoAllChecked()}
          onRemoveAllClick={handleRemoveAllClick}
          onToggleAllClick={handleToggleAllClick}
        />
        <Divider />
        <TodoList
          todos={todoState.todos}
          onToggleClick={handleToggle}
          onRemoveClick={handleRemove}
        />
      </TodoListArea>
    </main>
  );
}

export default App;
