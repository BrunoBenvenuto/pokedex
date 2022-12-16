import React from "react";
import "./modal.css";
import pokemones from "../data/data";
import weight from "../imgPokemones/Weight.svg";
import height from "../imgPokemones/Height.svg";
import pokeball from "../imgPokemones/Pokeball.png";
import { useParams } from "react-router-dom";

function Modal() {
  let { pokemonId } = useParams();
  const pokemon = pokemones.find((pokemon) => {
    if (pokemon.id === pokemonId) {
      return pokemon;
    }
  });

  return (
    <>
      <div className="modal" style={{ backgroundColor: pokemon.color1 }}>
        <div className="header-modal">
          <div className="pokemon-nombre-div">
            <div className="flecha-izquierda"></div>
            <h1 className="pokemon-nombre">{pokemon.nombre}</h1>
          </div>
          <h3 className="pokemon-numero">#{pokemon.id}</h3>

          <div className="div-pokeball">
            <div className="pokeball">
              {" "}
              <img src={pokeball} alt="pokeball" />
            </div>
          </div>

          <div className="div-pokemon">
            <div className="pokemon">
              {" "}
              <img src={pokemon.img} alt="pokemon" />
            </div>
          </div>
        </div>

        <div className="main-modal">
          <div className="main-modal2">
            <div className="type">
              <p
                className="type-button"
                style={{ backgroundColor: pokemon.color1 }}
              >
                {pokemon.tipo1}
              </p>
            </div>
            <div className="about">
              <h3 className="about-titulo" style={{ color: pokemon.color1 }}>
                About
              </h3>
              <div className="characteristics">
                <div className="peso">
                  <div className="weight-height">
                    <img src={weight} alt="weight" />
                    <p>{pokemon.peso}</p>
                  </div>
                  <p>Weight</p>
                </div>
                <div className="altura">
                  <div className="weight-height">
                    <img src={height} alt="height" />
                    <p>{pokemon.altura}</p>
                  </div>
                  <p>Height</p>
                </div>
                <div className="movimientos">
                  <p>{pokemon.movimientos}</p>
                  <p>Moves</p>
                </div>
              </div>
              <div className="description">
                <p>{pokemon.descripcion}</p>
              </div>
            </div>
            <div className="stats">
              <h3 className="stats-title" style={{ color: pokemon.color1 }}>
                Base Stats
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
