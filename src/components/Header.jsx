import "./header.css";
import React from "react";
import { useState } from "react";
import arrow from "../imgPokemones/Arrow.svg";
import pokeball from "../imgPokemones/Pokeball.png";
import pokemones from "../data/data";

function Header(props) {
  const onChangeBuscar = (e) => {
    props.filtrar(e.target.value);
  };

  return (
    <div className="div-header">
      <div className="arriba-header">
        <div className="titulo-main">
          <img src={pokeball} alt="logo pokeball" className="pokeball-main" />
          <h1 className="titulo-pokedex">Pokédex</h1>
        </div>
        <div className="flecha-abajo">
          <p className="numeral">#</p>
          <img src={arrow} alt="flecha" className="flecha-abajo2" />
        </div>
      </div>
      <div className="abajo-header">
        <div className="buscador">
          <input
            type="text"
            placeholder="Buscar"
            onChange={onChangeBuscar}
            className="buscador2"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
