export const getStoredFavorites = <T>(key: string): T[] => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T[]) : [];
  } catch (e) {
    console.error('error:', e);
    return [];
  }
};

export const saveFavorites = <T>(key: string, favorites: T[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(favorites));
  } catch (e) {
    console.error('error:', e);
  }
};
