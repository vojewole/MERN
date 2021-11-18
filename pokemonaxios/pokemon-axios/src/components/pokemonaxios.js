import { useEffect, useState } from "react";
import axios from "axios";

const PokemonAxios = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => setPokemon(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {pokemon.length > 0 &&
        pokemon.map((pokemon, index) => {
          return (
            <ul key={index}>
              <li>{pokemon.name}</li>
            </ul>
          );
        })}
    </div>
  );
};
export default PokemonAxios;
