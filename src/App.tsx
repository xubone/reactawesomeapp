import React from "react";
import "./App.css";

import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  const pokemons = [
    {
      name: "Charizard",
      weight: 90,
      awesome: true,
      terrifying: false,
      abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
    },
    {
      name: "Bulbasaur",
      weight: 6.9,
      awesome: true,
      terrifying: false,
      abilities: ["Overgrow", "Chlorophyll"],
    },
    {
      name: "Mewtwo",
      weight: 122,
      awesome: true,
      terrifying: true,
      abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
    },
    {
      name: "Mega beedrill",
      weight: 65,
      awesome: false,
      terrifying: true,
      abilities: ["Intimidate", "Unnerve power"],
    },
  ];
  return (
    <div className="App">
      <main>
        <Title content="Some text" />
        {pokemons.map((pokemon) => {
          return (
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          );
        })}
        {/* <Pokemon
          name="Charizard"
          weight={90}
          awesome={true}
          terrifying={false}
          abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
        />
        <Pokemon
          name="Bulbasaur"
          weight={90}
          awesome={true}
          terrifying={false}
          abilities={["Overgrow", "Chlorophyll"]}
        />
        <Pokemon
          name="Mewtwo"
          weight={90}
          awesome={true}
          terrifying={false}
          abilities={}
        />
        <Pokemon
          name="Mega beedrill"
          weight={90}
          awesome={true}
          terrifying={false}
          abilities={["Intimidate", "Unnerve power"]}
        /> */}
      </main>
    </div>
  );
}

export default App;
