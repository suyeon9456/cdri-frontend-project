import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Document } from '../models/book';

export type Like = Omit<Document, 'isbn' | 'publisher' | 'translators' | 'status'> & { id: string };

interface LikeStore {
  likes: Like[];
  toggleLike: (book: Like) => void;
  isLike: (id: string) => boolean;
}

const useLikeStore = create<LikeStore>()(
  persist(
    (set, get) => ({
      likes: [],

      isLike: (id: string) => {
        return get().likes.some((book) => book.id === id);
      },

      toggleLike: (book: Like) => {
        const { likes } = get();
        const exists = likes.some((item) => item.id === book.id);

        const updated = exists ? likes.filter((item) => item.id !== book.id) : [...likes, book];

        set({ likes: updated });
      },
    }),
    {
      name: 'likeBooks',
    },
  ),
);

export default useLikeStore;
