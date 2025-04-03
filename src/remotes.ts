import axios from 'axios';
import { ResponseGetBooks } from './types/getBooks';

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

export const getSearchBooks = async (): Promise<ResponseGetBooks> => {
  const { data } = await axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
    params: { query: '미움받을 용기', page: 1 },
    headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`,
    },
  });

  return data;
};
