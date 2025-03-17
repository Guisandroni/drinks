import { useEffect, useState } from 'react';

import { Drink } from '../types';

const useDrinksId = (idDrink: string) => {
  const [drink, setDrink] = useState<Drink>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDrinkId = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      );
      console.log(response);
      const data = await response.json();
      setDrink(data.drinks[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrinkId();
  }, []);

  return { drink, loading, fetchDrinkId };
};
export default useDrinksId;
