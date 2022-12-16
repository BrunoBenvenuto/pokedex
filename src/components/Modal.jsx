import React from "react";
import "./modal.css";
import pokemones from "../data/data";
import weight from "../imgPokemones/Weight.svg";
import height from "../imgPokemones/Height.svg";
import pokeball from "../imgPokemones/Pokeball.png";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Progress } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'


function Modal() {
  let { pokemonId } = useParams();
  const pokemon = pokemones.find((pokemon) => {
    if (pokemon.id === pokemonId) {
      return pokemon;
    }
  });
  const pokemon = arrayFiltrado[0];
  const getPokemonColor = () => {
    if (pokemon?.color1 === "#74CB48") {
      return "green"
    } else if (pokemon?.color1 === "#F57D31") {
      return "orange"
    } else if (pokemon?.color1 === "#6493EB") {
      return "blue"
    } else if (pokemon?.color1 === "#A7B723") {
      return "green"
    } else if (pokemon?.color1 === "#F9CF30") {
      return "yellow"
    } else if (pokemon?.color1 === "#70559B") {
      return "purple"
    } else if (pokemon?.color1 === "#AAA67F") {
      return "yellow"
    } else if (pokemon?.color1 === "#FB5584") {
      return "pink"
    } else if (pokemon?.color1 === "#B7B9D0") {
      return "gray"
    } else {
      return "blue"
    }

  }
  console.log(pokemon)
  return (
    <>
      <div className="modal" style={{ backgroundColor: pokemon?.color1 }}>
        <div className="header-modal">
          <div className="pokemon-nombre-div">
            <div className="flecha-izquierda"></div>
            <h1 className="pokemon-nombre">{pokemon?.nombre}</h1>
          </div>
          <h3 className="pokemon-numero">{pokemon?.id}</h3>

          <div className="div-pokeball">
            <div className="pokeball">
              {" "}
              <img src={pokeball} alt="pokeball" />
            </div>
          </div>

          <div className="div-pokemon">
            <div className="pokemon">
              {" "}
              <img src={pokemon?.img} alt="pokemon" />
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

            <ChakraProvider>

              <h3 style={{ color: pokemon?.color1 }} className="stats-title">Base Stats</h3>
              <div className="div-base-states">
                <div className="div-stats">
                  <div className="stats-valores">
                    <p style={{ color: pokemon?.color1 }}>HP</p>
                  </div>
                  <div className="stats-valores">
                    <p style={{ color: pokemon?.color1 }}>ATK</p>
                  </div>
                  <div className="stats-valores">
                    <p style={{ color: pokemon?.color1 }}>DEF</p>
                  </div>
                  <div className="stats-valores">
                    <p style={{ color: pokemon?.color1 }}>SATK</p>
                  </div>
                  <div className="stats-valores">
                    <p style={{ color: pokemon?.color1 }}>SDEF</p>
                  </div>
                  <div className="stats-valores">
                    <p style={{ color: pokemon?.color1 }}>SPD</p>
                  </div>
                </div>
                <div className="div-stats-numero">
                  <div className="stats-numero">
                    <p>{pokemon?.baseStates.hp}</p>
                  </div>
                  <div className="stats-numero">
                    <p>{pokemon?.baseStates.atk}</p>
                  </div>
                  <div className="stats-numero">
                    <p>{pokemon?.baseStates.def}</p>
                  </div>
                  <div className="stats-numero">
                    <p>{pokemon?.baseStates.satk}</p>
                  </div>
                  <div className="stats-numero">
                    <p>{pokemon?.baseStates.sdef}</p>
                  </div>
                  <div className="stats-numero">
                    <p>{pokemon?.baseStates.sdef}</p>
                  </div>
                </div>

                <div className="div-barras">
                  <div className="stats">
                    <Progress value={pokemon?.baseStates.hp} width={80} height={1.5} colorScheme={getPokemonColor()} />
                  </div>
                  <div className="stats">
                    <Progress value={pokemon?.baseStates.atk} width={80} height={1.5} colorScheme={getPokemonColor()} />
                  </div>
                  <div className="stats">
                    <Progress value={pokemon?.baseStates.def} width={80} height={1.5} colorScheme={getPokemonColor()} />
                  </div>
                  <div className="stats">
                    <Progress value={pokemon?.baseStates.satk} width={80} height={1.5} colorScheme={getPokemonColor()} />
                  </div>
                  <div className="stats">
                    <Progress value={pokemon?.baseStates.sdef} width={80} height={1.5} colorScheme={getPokemonColor()} />
                  </div>
                  <div className="stats">
                    <Progress value={pokemon?.baseStates.sdef} width={80} height={1.5} colorScheme={getPokemonColor()} />
                  </div>
                </div>
              </div>
            </ChakraProvider>
          </div>
        </div>
      </div>

    </>
  );
}

export default Modal;
