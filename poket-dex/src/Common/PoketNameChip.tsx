import React from "react";
import styled from "@emotion/styled";

interface PoketNameChipProps {
  name: string;
  id: number; //포켓몬 number
}

// poket몬 카드의 내용 component
export default function PoketNameChip(props: PoketNameChipProps) {
  const renderNumber = (id: number) => {
    const digits = 3; // 전체 자릿수
    const numberString = id.toString();

    if (numberString.length >= digits) {
      return numberString;
    }

    let result = "";

    for (let i = 0; i < digits - numberString.length; i++) {
      result += "0";
    }

    return (result += id);
  };

  return (
    <Chip>
      <NumberChip>
        <Number>{renderNumber(props.id)}</Number>
      </NumberChip>
      <Text>{props.name}</Text>
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
