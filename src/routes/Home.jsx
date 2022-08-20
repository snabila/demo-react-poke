import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";

const Home = ({ title }) => {
  const [pokes, setPokes] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  // Fetch On Load
  useEffect(() => {
    const getPokes = async () => {
      const data = await fetchPokes("https://pokeapi.co/api/v2/pokemon/");

      setNext(data.next);
      setPrev(data.previous);

      for (const poke of data.results) {
        const pokeData = await fetchPoke(poke.url);
        setPokes((pokes) => [...pokes, pokeData]);
      }
    };
    document.title = title + " - PokeAPI React + Tailwind";
    setPokes([]);
    getPokes();
  }, []);

  const fetchPokes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const fetchPoke = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    return {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types,
    };
  };

  const nextPrev = async (url) => {
    setPokes([]);
    const data = await fetchPokes(url);

    setNext(data.next);
    setPrev(data.previous);

    for (const poke of data.results) {
      const pokeData = await fetchPoke(poke.url);
      setPokes((pokes) => [...pokes, pokeData]);
    }
  };

  return (
    <div>
      <Pagination
        prev={prev}
        next={next}
        clickNext={() => nextPrev(next)}
        clickPrev={() => nextPrev(prev)}
      />
      <Cards pokes={pokes} />
      <Pagination
        prev={prev}
        next={next}
        clickNext={() => nextPrev(next)}
        clickPrev={() => nextPrev(prev)}
      />
    </div>
  );
};

export default Home;
