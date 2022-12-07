import "./header.css";
import React from "react";
import arrow from "../imgPokemones/Arrow.svg";
import pokeball from "../imgPokemones/Pokeball.png";

function Header() {
  return (
    <div className="div-header">
      <div className="arriba-header">
        <div className="titulo-main">
          <img src={pokeball} alt="hola" className="pokeball-main" />
          <h1 className="titulo-pokedex">Pokédex</h1>
        </div>
        <div className="flecha-abajo">
          <p className="numeral">#</p>
          <img src={arrow} alt="hola" className="flecha-abajo2" />
        </div>
      </div>
      <div className="abajo-header">
        <div className="buscador">
          <input type="text" placeholder="Buscar" className="buscador2" />
        </div>
      </div>
    </div>
  );
}

export default Header;
