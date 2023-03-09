import styled from "@emotion/styled";
import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { POKETMON_IMAGE_TYPE } from "../Constants";
import { RootState, useAppDispatch } from "../Store";
import { changeImageType, PoketmonImageKeyType } from "../Store/imageTypeSlice";

// 페이지 헤더 컴포넌트
export default function PageHeader() {
  const type = useSelector((state: RootState) => state.imageType.type);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(type);
    dispatch(
      changeImageType({
        type: e.target.value as PoketmonImageKeyType,
      })
    );
  };

  return (
    <Header>
      <Title>
        <Link to="/">Pokémon</Link>{" "}
        {/* Link component는 랜더되면 a태그로 변함 */}
      </Title>
      <Select value={type} onChange={handleChange}>
        <option value={POKETMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>Official</option>
        <option value={POKETMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
        <option value={POKETMON_IMAGE_TYPE.FROND_DEFAULT}>FrontDefault</option>
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
