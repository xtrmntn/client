import { useEffect, useState } from 'react';

const prefix = 'xtrmntn';

export const useStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const item = localStorage.getItem(`${prefix}:${key}`);
      setValue(item ? JSON.parse(item) : initialValue);
    } catch {
      setValue(initialValue);
    }
  }, []);

  const setStorageValue = (value: T) => {
    setValue(value);
    localStorage.setItem(`${prefix}:${key}`, JSON.stringify(value));
  };

  return [value, setStorageValue] as const;
};
