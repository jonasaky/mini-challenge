import React from "react";
import { mockPokemonData } from "../mock/pokeData";

const { name, sprites, video } = mockPokemonData;

export default function PokeCard() {
  return (
    <div className="pokeCard">
      <h1 className="pokeCardTitle">{name}</h1>
      <div className="pokeCardImg">
        <img src={sprites.front_default} alt="default" />
        <img src={sprites.front_shiny} alt="shiny" />
      </div>
      <a className="pokeCardVideo" href={video} target="_new">
        Go to charizard's video
      </a>
    </div>
  );
}
