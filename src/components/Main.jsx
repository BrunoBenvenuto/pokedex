import React from "react";
import "./main.css";
import pokemones from "../data/data.js";
import { useState } from "react";

function Main() {
  const [datosPokemones, setDatosPokemones] = useState(pokemones);

  return (
    <div className="main">
      {datosPokemones.map((pokemones) => {
        return (
          <div className="pokemones" style={{ borderColor: pokemones.color1 }}>
            <div
              className="numero-pokemon-cajita"
              style={{ color: pokemones.color1 }}
            >
              <p>{pokemones.id}</p>
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
        );
      })}
    </div>
  );
}

export default Main;
