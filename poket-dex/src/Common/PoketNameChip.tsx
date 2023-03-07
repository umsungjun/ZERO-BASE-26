import React from "react";
import styled from "@emotion/styled";

// poket몬 카드의 내용 component
export default function PoketNameChip() {
  return (
    <Chip>
      <NumberChip>
        <Number>001</Number>
      </NumberChip>
      <Text>이상해씨</Text>
    </Chip>
  );
}

const Chip = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  font-weight: bold;
  box-shadow: 0.5px 0px 0.5px #c0c0c0;
  font-size: 16px;
`;

const NumberChip = styled.div`
  padding: 4px 6px;
  background-color: yellow;
  border-radius: 16px;
  opcity: 0.8;
`;

const Number = styled.label`
  opcity: 1;
`;

const Text = styled.label`
  margin: 0 8px 0px 5px;
`;
