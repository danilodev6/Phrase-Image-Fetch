const API_IMG = `https://cataas.com/cat/says/`;

export const getRandomImg = async (fact) => {
  const firstWord = fact.split(" ", 3).join(" ");
  return fetch(`${API_IMG}${firstWord}?json=true`)
    .then((res) => res.json())
    .then((response) => {
      const { _id } = response;
      return `/cat/${_id}/says/${firstWord}`;
    })
    .catch((err) => Error(err));
};
