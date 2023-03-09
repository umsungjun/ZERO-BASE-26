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
export const fetchPoketmons = async (nextURL?: string) => {
  // nextURL이 없을 수 잇으니까 nextURL뒤에 옵셔널 체이닝
  const requestUrl = nextURL ? nextURL : "https://pokeapi.co/api/v2/pokemon";

  // post, get, put, delete
  const response = await remote.get<PoketmonListResponseType>(requestUrl);

  return response.data;
};

interface PoketmonDetailResponseType {
  id: number;
  weight: number;
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

interface PoketmonSpeciesResponseType {
  // speciesResponse API를 통해서 받아온 데이터의 type을 interface함
  color: {
    name: string;
  };
  names: {
    // 배열안의 받을 요소에 대해서만 적으면 됨
    name: string;
    language: {
      name: string;
    };
  }[];
}

export interface PoketmonDetailType {
  // 두가지 return 값의 type을 같이 줘도 됨
  id: number;
  weigth: number;
  height: number;
  name: string;
  KoreanName: string;
  color: string;
  types: string[];
  images: {
    frontDefault: string;
    dreamWorldFront: string;
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
  const poketmonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

  const response = await remote.get<PoketmonDetailResponseType>( //axios를 통해서 데이터를 받을 때 type을 제네릭으로 줘야 함
    poketmonDetailUrl
  );
  const speciesResponse = await remote.get<PoketmonSpeciesResponseType>(
    poketmonSpeciesUrl
  ); // 구체적인 poketmon정보를 가져올 수 있는 APIURL을 통해서 정보를 가져옴
  const detail = response.data; // responsedata를 한번 감쌈
  const species = speciesResponse.data; // 감싸는 이유는 감싸지 않으면 코드가 길어짐 -> speciesResponse.data

  return {
    id: detail.id,
    name: detail.name,
    height: detail.height / 10, // 미터 단위
    weigth: detail.weight / 10, // kg 단위
    color: species.color.name,
    KoreanName:
      species.names.find((item) => {
        return item.language.name === "ko";
      })?.name ?? detail.name, //find가 못찾을 경우 영어이름을 넣음
    types: detail.types.map((item) => item.type.name),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorldFront: detail.sprites.other.dream_world.front_default,
      officialArtworkFront:
        detail.sprites.other["official-artwork"].front_default,
    },
    baseStats: detail.stats.map((item) => {
      return {
        name: item.stat.name,
        value: item.base_stat,
      };
    }),
  };
};
