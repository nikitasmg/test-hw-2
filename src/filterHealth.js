export const sortByHealth = (characters) => {
  const sortedArray = characters.sort((a, b) => b.health - a.health);
  return sortedArray
};
