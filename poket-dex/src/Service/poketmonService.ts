import axios from "axios";

const remote = axios.create();

export interface PoketmonListResponseType {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[] /* results는 배열로 받으니까 배열을 붙여줌 */;
}

// 포켓몬의 영어 이름을 불러옴
export const fetchPoketmons = async () => {
  const defaultUrl = "https://pokeapi.co/api/v2/pokemon";

  // post, get, put, delete
  const response = await remote.get<PoketmonListResponseType>(defaultUrl);

  return response.data;
};

interface PoketmonDetailResponseType {
  id: number;
  weigth: number;
  height: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

interface PoketmonDetailType {
  id: number;
  weigth: number;
  height: number;
  name: string;
  types: string[];
  images: {
    frontDefault: string;

    dream_world: string;

    officialArtworkFront: string;
  };
  baseStats: {
    name: string;
    value: number;
  }[];
}

export const fetchPoketmonDetail = async (
  name: string
): Promise<PoketmonDetailType> => {
  const poketmonDetailUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await remote.get<PoketmonDetailResponseType>(
    poketmonDetailUrl
  );
  const detail = response.data; // responsedata를 한번 감쌈

  return {
    id: detail.id,
    name: detail.name,
    height: detail.height,
  };
};
