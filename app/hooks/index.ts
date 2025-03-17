import { useState } from 'react';

import { api } from '../api/api';
import { Drink } from '../types';

export const useDrinks = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async (searchText: string) => {
    if (searchText.length === 0) {
      return;
    }
    try {
      const data = await api(searchText);
      if (data.drinks.length === 0) {
        setErrorMessage('No drinks found');
      } else {
        setErrorMessage('');
        setDrinks(data.drinks);
      }
    } catch (error) {
      setErrorMessage('No drinks found');
    }
  };
  const clearSearch = () => {
    setDrinks([]);
    setErrorMessage('');
  };
  return { drinks, errorMessage, fetchData, clearSearch };
};
