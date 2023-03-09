import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "@emotion/styled";
import PoketMarkChip from "../Common/PoketMarkChip";
import {
  fetchPoketmonDetail,
  PoketmonDetailType,
} from "../Service/poketmonService";
import { PoketmonImageSkeleton } from "../Common/PoketmonImageSkeleton";

// 포켓몬 상세 페이지
export default function PoketmonDetail() {
  const { name } = useParams(); //page navigator 지정된 명칭 path="/poketmon/:name"
  const [poketmon, setPoketmon] = useState<PoketmonDetailType | null>(null);

  useEffect(() => {
    if (!name) {
      return;
    }
    (async () => {
      const detail = await fetchPoketmonDetail(name);
      setPoketmon(detail);
    })();
  }, [name]);

  if (!name || !poketmon) {
    return (
      <Container>
        <ImageContainer>
          <PoketmonImageSkeleton />
        </ImageContainer>
        <Devider />
        <Body>
          <h2>기본정보</h2>
          <Table>
            <tbody>
              <TableRow>
                <TableHeader>번호</TableHeader>
                <td></td>
              </TableRow>
              <TableRow>
                <TableHeader>이름</TableHeader>
                <td></td>
              </TableRow>
              <TableRow>
                <TableHeader>타입</TableHeader>
                <td></td>
              </TableRow>
              <TableRow>
                <TableHeader>키</TableHeader>
                <td></td>
              </TableRow>
              <TableRow>
                <TableHeader>몸무게</TableHeader>
                <td></td>
              </TableRow>
            </tbody>
          </Table>
          <h2>능력치</h2>
          <Table></Table>
        </Body>
        <Footer>
          <PoketMarkChip />
        </Footer>
      </Container>
    );
  }

  // const renderNumber = (id: number) => {
  //   const digits = 3; // 전체 자릿수
  //   const numberString = id.toString();

  //   if (numberString.length >= digits) {
  //     return numberString;
  //   }

  //   let result = "";

  //   for (let i = 0; i < digits - numberString.length; i++) {
  //     result += "0";
  //   }

  //   return (result += id);
  // };
  // console.log(poketmon);
  return (
    <Container>
      <ImageContainer>
        <Image
          src={poketmon?.images.dreamWorldFront}
          alt={poketmon?.KoreanName}
        />
      </ImageContainer>
      <Devider />
      <Body>
        <h2>기본정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>{poketmon?.id}</td>
            </TableRow>
            <TableRow>
              <TableHeader>이름</TableHeader>
              <td>{`${poketmon?.KoreanName} (${poketmon?.name})`}</td>
            </TableRow>
            <TableRow>
              <TableHeader>타입</TableHeader>
              <td>{`${poketmon?.types.toString()}`}</td>
            </TableRow>
            <TableRow>
              <TableHeader>키</TableHeader>
              <td>{poketmon?.height} m</td>
            </TableRow>
            <TableRow>
              <TableHeader>몸무게</TableHeader>
              <td>{poketmon?.weigth}</td>
            </TableRow>
          </tbody>
        </Table>
        <h2>능력치</h2>
        <Table>
          <tbody>
            {poketmon?.baseStats.map((stat) => {
              return (
                <TableRow key={stat.name}>
                  <TableHeader>{stat.name}</TableHeader>
                  <td>{stat.value}</td>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </Body>
      <Footer>
        <PoketMarkChip />
      </Footer>
    </Container>
  );
}

const Container = styled.section`
  border: 1px solid #c0c0c0;
  margin: 16px 32px;
  border-radius: 16px;
  box-shadow: 1px 1px 3px 1px;
  min-height: 1000px;
`;

const ImageContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0px;
`;

const Image = styled.img`
  width: 350px;
  heigth: 350px;
`;

const Devider = styled.hr`
  margin: 32px;
  border-style: none;
  border-top: 1px dashed #d3d3d3;
`;

const Body = styled.section`
  margin: 0 32px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto 16px;
  th,
  td {
    padding: 6px 12px;
  }
`;

const TableRow = styled.tr`
  border: 1px solid #f0f0f0;
`;

const TableHeader = styled.th`
  width: 1px;
  white-space: nowrap; // 글씨가 wrap되지 않게
  text-align: left;
  font-weight: normal;
  font-size: 14px;
  color: #a0a0a0;
`;

const Footer = styled.section`
  display: flex;
  margin: 32px 16px;
`;
