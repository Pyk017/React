import { useState, useEffect } from "react";

export interface LocalStorageState {
  value: any;
  setValue: React.Dispatch<any>;
  getLocalStorage: () => number;
}

export default function useLocalStorage(
  key: any,
  defaultValue: any
): LocalStorageState {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") return defaultValue();

    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  const getLocalStorage = () => {
    let val = localStorage.getItem(key);
    if (!val) return 0;
    return JSON.parse(val);
  };

  return { value, setValue, getLocalStorage };
}
