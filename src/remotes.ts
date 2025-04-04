import axios from 'axios';
import { RequestGetBooks, ResponseGetBooks } from './types/getBooks';

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

export const getSearchBooks = async (query: {
  [K in keyof RequestGetBooks]: string | number;
}): Promise<ResponseGetBooks> => {
  const { data } = await axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
    params: query,
    headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`,
    },
  });

  return data;
};
