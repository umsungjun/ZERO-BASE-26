import React, { useState, useReducer } from "react";
import "./App.css";
import Divider from "./Divider/Divider";
import TodoHeader from "./Header/TodoHeader";
import TodoInput from "./Input/TodoInput";
import TodoList from "./List/TodoList";
import TodoListArea from "./List/TodoListArea";
import TodoListTools from "./Tools/TodoListTools";

export type TodoTypes = {
  id: number;
  text: string;
  isChecked: boolean;
};

function App() {
  const [text, setText] = useState("");
  // const [inputState, inputDispatch] = useReducer()
  const [todos, setTodos] = useState<TodoTypes[]>([]);

  const handleTextChange = (text: string) => {
    //TodoInput에서 넘겨준 event.target.value를 매개변수 text로 받아서

    setText(text);
  };

  const handleSubmit = () => {
    if (!text) return;
    const newTodos = todos.concat({
      id: Date.now(), // Date.now() number type으로 고유값이 생김
      text: text,
      isChecked: false,
    });
    setTodos(newTodos);
    setText(""); // todo가 등록되면 입력창을 비움
  };

  const handleRemove = (id: number) => {
    // console.log("remove", id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleToggle = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        // react는 새로운 값일 경우 새로운 객체를 반환해줘야함
        return {
          ...todo, //기존의 값들은 그대로 넘겨주고
          isChecked: !todo.isChecked, // isChecked의 값만 현재의 값과 반대되는 값으로 넘겨줌
        };
      }
      return todo; // id가 동일하지 않은 값들은 그대로 return
    });
    // console.log(newTodos);
    setTodos(newTodos);
  };

  const isTodoAllChecked = () => {
    return todos.every((todo) => todo.isChecked); // 하나라도 체크가 되어있다면 true
  };

  const handleToggleAllClick = () => {
    const isAllChecked = isTodoAllChecked();
    console.log(isAllChecked);
    const newTodos = todos.map((todo) => {
      return {
        ...todo,
        isChecked: !isAllChecked,
      };
    });

    setTodos(newTodos);
  };

  const handleRemoveAllClick = () => {
    // console.log("전체 삭제");
    setTodos([]);
  };

  return (
    <main className="App">
      <TodoHeader count={todos.length} />
      <TodoInput
        text={text}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <TodoListArea todoCount={todos.length}>
        <TodoListTools
          isAllChecked={isTodoAllChecked()}
          onRemoveAllClick={handleRemoveAllClick}
          onToggleAllClick={handleToggleAllClick}
        />
        <Divider />
        <TodoList
          todos={todos}
          onToggleClick={handleToggle}
          onRemoveClick={handleRemove}
        />
      </TodoListArea>
    </main>
  );
}

export default App;
