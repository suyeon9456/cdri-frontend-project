import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ComponentProps } from 'react';
import SearchBox from '../components/SearchBox';

export type HistorySearches = ComponentProps<typeof SearchBox>['previousSearches'][number];

interface SearchHistoryStore {
  historySearches: HistorySearches[];
  removeHistory: (value: string) => void;
  setHistory: (history: HistorySearches) => void;
}

const useSearchHistoryStore = create<SearchHistoryStore>()(
  persist(
    (set, get) => ({
      historySearches: [],
      removeHistory: (value: string) => {
        const { historySearches: prevHistory } = get();
        const updated = prevHistory.filter(({ value: v }) => v !== value);
        set({ historySearches: updated });
      },
      setHistory: (history: HistorySearches) => {
        const { historySearches: prevHistory } = get();
        const isAlreadyExist = prevHistory.some(({ value }) => history.value === value);
        if (isAlreadyExist) {
          set({
            historySearches: [
              ...prevHistory.filter(({ value }) => history.value !== value),
              history,
            ],
          });
          return;
        }
        if (prevHistory.length >= 8) {
          set({ historySearches: [...prevHistory.slice(1), history] });
          return;
        }
        const updated = [...prevHistory, history];
        set({ historySearches: updated });
      },
    }),
    {
      name: 'searchHistory',
    },
  ),
);

export default useSearchHistoryStore;
