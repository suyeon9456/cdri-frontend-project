import { useCallback, useState } from 'react';
import { getStoredFavorites, saveFavorites } from '../utils/localStorage';
import { Document } from '../models/book';

const FAVORITES_KEY = 'favoriteBooks';

type Like = Omit<Document, 'isbn' | 'publisher' | 'translators' | 'status'> & { id: string };

const useLike = () => {
  const [likes, setLikes] = useState<Array<Like>>(getStoredFavorites<Like>(FAVORITES_KEY));
  console.log('🚀 ~ useLike ~ likes:', likes);

  const isLike = useCallback((id: string) => likes.some((book) => book.id === id), [likes]);

  const toggleLike = useCallback(
    (book: Like) => {
      setLikes((prev) => {
        const exists = prev.some((item) => item.id === book.id);
        const updated = exists ? prev.filter((item) => item.id !== book.id) : [...prev, book];
        console.log('🚀 ~ setLikes ~ updated:', updated);

        saveFavorites<Like>(FAVORITES_KEY, updated);
        return updated;
      });
    },
    [setLikes],
  );

  return {
    likes,
    isLike,
    toggleLike,
  };
};

export default useLike;
