import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Main(props) {


  return (
    <div className="main">
      {props.datosPokemones.map((pokemones) => {
        return (
          <Link to={`/pokemones/${pokemones.id}`}>
            <div
              className="pokemones"
              style={{ borderColor: pokemones.color1 }}
            >
              <div
                className="numero-pokemon-cajita"
                style={{ color: pokemones.color1 }}
              >
                <p>#{pokemones.id}</p>
              </div>
              <div>
                <div className="foto-pokemon-cajita">
                  <img
                    src={pokemones.img}
                    alt="cualquier cosa"
                    className="foto-pokemon-cajita"
                  />
                </div>
              </div>
              <div
                className="nombre-pokemon-cajita"
                style={{ backgroundColor: pokemones.color1 }}
              >
                <p>{pokemones.nombre}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Main;
