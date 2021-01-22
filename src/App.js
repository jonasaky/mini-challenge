import React from "react";
import PokeCard from "./components/PokeCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 id="title">Pokédex!</h1>
      <PokeCard />
    </div>
  );
}
