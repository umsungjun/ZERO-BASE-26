import styled from "@emotion/styled";
import React from "react";

// 페이지 헤더 컴포넌트
export default function PageHeader() {
  return (
    <Header>
      <Title>Pokémon</Title>
      <Select>
        <option value="Official">Official</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </Select>
    </Header>
  );
}

/* 페이지 헤더 */
const Header = styled.nav`
  display: flex;
  padding: 16px 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid #c0c0c0;
`;

/* 포켓몬 로고 */
const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  color: #f5d804;
  text-shadow: 0px -1px blue, 0px -1px 1px blue, 0px 2px 2px blue,
    0px -1px 2px blue;
`;

const Select = styled.select`
  diplay: flex;
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 8px;
`;
