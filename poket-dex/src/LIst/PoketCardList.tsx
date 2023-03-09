import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import PoketCard from "./PoketCard";
import {
  fetchPoketmonsAPI,
  PoketmonListResponseType,
} from "../Service/poketmonService";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { RootState, useAppDispatch } from "../Store";
import { fetchPoketmons } from "../Store/poketmonsSlice";

// poketmon card list container component
export default function PoketCardList() {
  const dispatch = useAppDispatch();
  const { poketmons } = useSelector((state: RootState) => state.poketmons);

  const [infinityRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: poketmons.next !== "",
    onLoadMore: async () => {
      // infinity스크롤이 바닥에 닿았을 때 호출 되는 함수
      // console.log("닿음");
      dispatch(fetchPoketmons(poketmons.next));
    },
    disabled: false,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: "0px 0px 400px 0px",
  });

  useEffect(() => {
    // component가 mount됐을 때 실행

    dispatch(fetchPoketmons());
  }, [dispatch]);

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
