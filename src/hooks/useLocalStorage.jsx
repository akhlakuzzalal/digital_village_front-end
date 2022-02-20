import { useEffect, useState } from 'react';

const getLocalValue = (key, initValue) => {
  const localValue = JSON.parse(localStorage.getItem(key));
  if (localValue) return localValue;

  if (initValue instanceof Function) return initValue();

  return initValue;
};

const useLocalStorage = (key, initValue) => {
  const [data, setData] = useState(
    JSON.parse(() => {
      return getLocalValue(key, initValue);
    })
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};

export default useLocalStorage;
