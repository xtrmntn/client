export const useDebounce = (delay = 500) => {
  let timer: NodeJS.Timeout | null = null;

  return (callback: () => void) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
};
