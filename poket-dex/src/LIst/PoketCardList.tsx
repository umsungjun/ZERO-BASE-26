import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";
import PoketCard from "./PoketCard";
import {
  fetchPoketmons,
  PoketmonListResponseType,
} from "../Service/poketmonService";

// poketmon card list container component
export default function PoketCardList() {
  const [poketmons, setPoketmons] = useState<PoketmonListResponseType>({
    count: 0,
    next: "",
    results: [],
  });

  useEffect(() => {
    // component가 mount됐을 때 실행
    (async () => {
      // 비동기 함수를 실행해서
      const poketmons = await fetchPoketmons(); //result에 비동기로 받아온 result.data를 result에 할당
      setPoketmons(poketmons);
    })();
  }, []);

  return (
    <List>
      {poketmons.results.map((poketmon, index) => {
        /* 0: {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'} Result값 예시*/
        return <PoketCard key={poketmon.name} name={poketmon.name} />;
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
