import { useState, useEffect } from 'react';
import lista from '../db/lista.json';

export const useLista = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(lista);
  }, []);

  return data;
};