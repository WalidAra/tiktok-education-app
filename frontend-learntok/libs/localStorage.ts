type Props = {
  getItem: (item: string) => string | null;
  setItem: (item: { name: string; value: string }) => void;
};

export const clientLocalStorage: Props = {
  getItem: (item: string): string | null => {
    return localStorage.getItem(item);
  },

  setItem: (item: { name: string; value: string }): void => {
    localStorage.setItem(item.name, item.value);
  },
};
