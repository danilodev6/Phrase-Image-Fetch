import { useEffect, useState } from "react";
import { getRandomFact } from "./services/getFact";
import { getRandomImg } from "./services/getImg";

const API_FACT = "https://catfact.ninja/fact";
const API_IMG = `https://cataas.com/cat/says/`;
const API_IMG_PREFIX = "https://cataas.com";

function App() {
  const [fact, setFact] = useState("");
  const [catImg, setCatImg] = useState(null);

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  useEffect(() => {
    if (!fact) return;
    getRandomImg(fact).then((newImg) => setCatImg(newImg));
  }, [fact]);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main>
      <h1>Api fetch test</h1>
      <button onClick={handleClick}> Get new Fact</button>
      {fact && <p>{fact}</p>}
      {catImg && (
        <img
          style={{ width: "280px", height: "auto" }}
          src={`${API_IMG_PREFIX}${catImg}?fontSize=40&fontColor=white`}
          alt="random cat image with the first word of the random fact"
        />
      )}
    </main>
  );
}

export default App;
