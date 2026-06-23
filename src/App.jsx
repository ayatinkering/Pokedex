import { useEffect, useState } from "react";

import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";
import PokeCard from "./components/PokeCard";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const [page, setPage] = useState(1);

  const POKEMON_PER_PAGE = 60;

  useEffect(() => {
    async function fetchPokemonList() {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=2000"
      );

      const data = await res.json();

      setPokemonList(data.results);
    }

    fetchPokemonList();
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  const totalPages = Math.ceil(
    filteredPokemon.length / POKEMON_PER_PAGE
  );

  const currentPokemon = filteredPokemon.slice(
    (page - 1) * POKEMON_PER_PAGE,
    page * POKEMON_PER_PAGE
  );

  const startPokemon =
  (page - 1) * POKEMON_PER_PAGE + 1;

const endPokemon = Math.min(
  page * POKEMON_PER_PAGE,
  filteredPokemon.length
);

  return (
    <div className="frame mx-8 my-8 p-8">

      <Header />

      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setPage(1);
        }}
        placeholder="Search Pokémon..."
        className="
          w-full
          max-w-xl
          mx-auto
          block
          mb-8
          px-4
          py-3
          rounded-xl
          bg-zinc-900
          border
          border-zinc-700
        "
      />


<div className="mb-8 text-zinc-400">

  Showing

  <span className="text-yellow-400 mx-2">
    {startPokemon}
  </span>

  -

  <span className="text-yellow-400 mx-2">
    {endPokemon}
  </span>

  of

  <span className="mx-2">
    {filteredPokemon.length}
  </span>

  Pokémon

</div>
      <PokemonGrid
        pokemonList={currentPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />

      <div className="flex justify-center gap-4 mt-10">

        <button
  onClick={() => {
    setPage(page - 1)

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }}
>
  Previous
</button>

        <p>
          Page {page} / {totalPages}
        </p>

        <button
  onClick={() => {
    setPage(page + 1)

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }}
>
  Next
</button>

      </div>

      {selectedPokemon && (
        <PokeCard
          selectedPokemon={selectedPokemon}
          closeModal={() =>
            setSelectedPokemon(null)
          }
        />
      )}

    </div>
  );
}

export default App;