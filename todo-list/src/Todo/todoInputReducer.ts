import React from "react";

type TodoInputStateType = {
  text: string;
};

// 사용자가 입력할때는 : change, 사용자의 입력이 끝났을 때는 : clear
type TodoInputActionType =
  | {
      type: "change";
    }
  | {
      type: "clear";
    };

export default function todoInputReducer(state: TodoInputStateType, action) {
  return "";
}
