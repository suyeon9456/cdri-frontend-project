export const getStoredList = <T>(key: string): T[] => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T[]) : [];
  } catch (e) {
    console.error('error:', e);
    return [];
  }
};

export const saveStoreList = <T>(key: string, list: T[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch (e) {
    console.error('error:', e);
  }
};
