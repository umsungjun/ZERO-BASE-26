import React from "react";

import styled from "@emotion/styled";
import PoketCard from "./PoketCard";

// poketmon card list container component
export default function PoketCardList() {
  return (
    <List>
      {Array.from({ length: 10 }).map((_, index) => {
        return <PoketCard key={index} />;
      })}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  margin: 0 0 32px 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* flex 사이간격 조절 */
`;
