import {useEffect, useState} from 'react';

const PokemonAPI = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then(response => response.json())
          .then(response => setPokemon(response.results))
  }, []);

  return (
      <div style={{display:"inline-block"}}>
          {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
              return (<ul key={index}><li>{pokemon.name}</li></ul>)
          })}
      </div>
  );
}
export default PokemonAPI;

