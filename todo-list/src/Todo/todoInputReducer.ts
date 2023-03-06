import React from "react";

export type TodoInputStateType = {
  text: string;
};

// 사용자가 입력할때는 : change, 사용자의 입력이 끝났을 때는 : clear
export type TodoInputActionType =
  | {
      type: "change";
      payload: string;
    }
  | {
      type: "clear";
    };

export const todoInputReducer = (
  state: TodoInputStateType,
  action: TodoInputActionType
) => {
  switch (action.type) {
    case "change":
      return {
        text: action.payload,
      };
    case "clear":
      return {
        text: "",
      };
  }
};
