export const getValue = (key: string) => {
  return localStorage.getItem(key);
};

export const setValue = (key: string, value: string) => {
  if (!key || !value) return;

  localStorage.setItem(key, value);
};

export const removeValue = (key: string) => {
  localStorage.removeItem(key);
};
