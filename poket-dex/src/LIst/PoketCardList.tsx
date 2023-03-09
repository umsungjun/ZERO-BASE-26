import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";
import PoketCard from "./PoketCard";
import {
  fetchPoketmons,
  PoketmonListResponseType,
} from "../Service/poketmonService";
import useInfiniteScroll from "react-infinite-scroll-hook";

// poketmon card list container component
export default function PoketCardList() {
  const [poketmons, setPoketmons] = useState<PoketmonListResponseType>({
    count: 0,
    next: "",
    results: [],
  });

  const [infinityRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: poketmons.next !== "",
    onLoadMore: async () => {
      // infinity스크롤이 바닥에 닿았을 때 호출 되는 함수
      // console.log("닿음");
      const morePoketmons = await fetchPoketmons(poketmons.next);
      setPoketmons({
        ...morePoketmons, //기존에 있던 count와 next는 유지하되
        results: [...poketmons.results, ...morePoketmons.results],
      });
    },
    disabled: false,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: "0px 0px 400px 0px",
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
    <>
      <List>
        {poketmons.results.map((poketmon, index) => {
          /* 0: {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'} Result값 예시*/
          return <PoketCard key={poketmon.name} name={poketmon.name} />;
        })}
      </List>
      <Loading ref={infinityRef}>Loading</Loading>
    </>
  );
}

const Loading = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  margin: 0 0 32px 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* flex 사이간격 조절 */
`;
