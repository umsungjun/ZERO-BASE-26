import React from "react";

export type TodoTypes = {
  id: number;
  text: string;
  isChecked: boolean;
};

type TodoStateType = {
  todos: TodoTypes[];
};

// add, remove, checked, allChecked, allRemove
type TodoActionType =
  | {
      type: "add";
      payload: {
        text: string;
      };
    }
  | {
      type: "remove";
      payload: {
        id: number;
      };
    }
  | {
      type: "checked";
      payload: {
        id: number;
      };
    }
  | {
      type: "allChecked";
      payload: boolean;
    }
  | {
      type: "allRemove";
    };

export const todoReducer = (state: TodoStateType, action: TodoActionType) => {
  switch (action.type) {
    case "add":
      return {
        todos: state.todos.concat({
          id: Date.now(), // Date.now() number type으로 고유값이 생김
          text: action.payload.text,
          isChecked: false,
        }),
      };
    case "remove":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case "checked":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            // react는 새로운 값일 경우 새로운 객체를 반환해줘야함
            return {
              ...todo, //기존의 값들은 그대로 넘겨주고
              isChecked: !todo.isChecked, // isChecked의 값만 현재의 값과 반대되는 값으로 넘겨줌
            };
          }
          return todo; // id가 동일하지 않은 값들은 그대로 return
        }),
      };
    case "allChecked":
      return {
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            isChecked: !action.payload,
          };
        }),
      };
    case "allRemove":
      return {
        todos: [],
      };
  }
};
