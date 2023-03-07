import React from "react";
import PoketCardList from "./LIst/PoketCardList";
import { Routes, Route } from "react-router";
import PoketmonDetail from "./Detail/PoketmonDetail";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<PoketCardList />} />{" "}
      {/* root로 들어왔을 때는 <PoketCardList />를 보여줌 */}
      <Route path="/poketmon/:name" element={<PoketmonDetail />} />
    </Routes>
  );
}
