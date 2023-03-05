import React from "react";

export default function Logs(props) {
  return props.logs.map((log, i) => {
    return <li key={`${log}_${i}`}>{log}</li>;
  });
}
