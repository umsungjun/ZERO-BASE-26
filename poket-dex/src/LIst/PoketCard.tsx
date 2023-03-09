import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import PoketNameChip from "../Common/PoketNameChip";
import PoketMarkChip from "../Common/PoketMarkChip";
import {
  fetchPoketmonDetail,
  PoketmonDetailType,
} from "../Service/poketmonService";
import { PoketmonImageSkeleton } from "../Common/PoketmonImageSkeleton";

interface PoketCardProps {
  name: string;
}

// list의 card component
export default function PoketCard(props: PoketCardProps) {
  const navigate = useNavigate();
  const [poketmon, setPoketmon] = useState<PoketmonDetailType | null>(null);

  const handleClick = () => {
    navigate(`/poketmon/${props.name}`); //navigate를 props.name으로 한다.
  };

  useEffect(() => {
    (async () => {
      const detail = await fetchPoketmonDetail(props.name);
      setPoketmon(detail);
    })();
  }, [props.name]);

  if (!poketmon) {
    // 로딩중에 잠깐 나올 화면
    // poketmon은 비동기 통신으로 값을 가져오는 것이기 때문에 null일 경우 예외처리를 해줘야 함
    return (
      <Item color={"#fff"}>
        <Header>
          <PoketNameChip name={"포켓몬"} color={"#f5d804"} id={0} />
        </Header>
        <Body>
          <PoketmonImageSkeleton />
        </Body>
        <Footer>
          <PoketMarkChip />
        </Footer>
      </Item>
    );
  }
  return (
    <Item onClick={handleClick} color={poketmon.color}>
      {/* 카드를 클릭하면 */}
      <Header>
        <PoketNameChip
          name={poketmon.KoreanName}
          color={poketmon.color}
          id={poketmon.id}
        />
      </Header>
      <Body>
        <Image src={poketmon.images.dreamWorldFront} alt={poketmon.name} />
      </Body>
      <Footer>
        <PoketMarkChip />
      </Footer>
    </Item>
  );
}

// 포켓몬 카드
const Item = styled.li<{ color: string }>`
  display: flex;
  padding: 8px;
  flex-direction: column;
  border: 1px solid #c0c0c0;
  width: 250px;
  height: 300px;
  box-shadow: 1px 1px 1px 1px #c0c0c0;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    // &의미는 현재 component
    transform: scale(1.05);
  }
  &:active {
    background-color: ${(props) => props.color};
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

// 포켓몬 카드 헤더
const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Footer = styled.section`
  display: flex;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;
