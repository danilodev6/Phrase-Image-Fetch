const API_FACT = "https://catfact.ninja/fact";

// export const getRandomFact = async () => {
//   return fetch(API_FACT)
//     .then((res) => {
//       if (!res.ok) throw new Error("Error fetching");
//       return res.json();
//     })
//     .then((data) => {
//       const randomFact = data.fact;
//       return randomFact;
//     })
//     .catch((err) => {
//       throw new Error(err);
//     });
// };

export const getRandomFact = async () => {
  const res = await fetch(API_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};
