import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const selectPokemon = (newPokemon) => {
    /** 6마리까지만 가능하게 하기 */
    /** 이미 선택된 포켓몬은 또 추가하지 않도록 하기 */
    setSelectedPokemon([...selectedPokemon, newPokemon]);
  };

  const addPokemon = (pokemon) => {
    if (selectedPokemon.includes(pokemon)) {
      alert("이미 선택된 포켓못 입니다");
    } else {
      setSelectedPokemon([...selectPokemon, pokemon]);
    }
  };

  const removePokemon = (removedPokemon) => {
    const filteredPokemon = selectedPokemon.filter(
      (pokemon) => pokemon.korean_name !== removedPokemon.korean_name
    );
    setSelectedPokemon(filteredPokemon);
  };
  return (
    <>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={selectPokemon} />
    </>
  );
}

export default Dex;
