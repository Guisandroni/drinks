export const api = async (searchText: string) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
  );
  const data = await response.json();
  return data;
};
