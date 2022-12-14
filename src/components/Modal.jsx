import React from "react";
import "./modal.css";
import weight from "../imgPokemones/Weight.svg";
import height from "../imgPokemones/Height.svg";
import pokeball from "../imgPokemones/Pokeball.png";

function Modal(props) {
    return (
        <div>
            {props.datosPokemones.map((pokemones) => {
                return (
                    <div className="modal" style={{ backgroundColor: pokemones.color1 }}>
                        <div className="header-modal">
                            <div className="pokemon-nombre-div">
                                <div className="flecha-izquierda"></div>
                                <h1 className="pokemon-nombre">{pokemones.nombre}</h1>
                            </div>
                            <h3 className="pokemon-numero">{pokemones.id}</h3>

                            <div className="div-pokeball">
                                <div className="pokeball">
                                    {" "}
                                    <img src={pokeball} alt="pokeball" />
                                </div>
                            </div>

                            <div className="div-pokemon">
                                <div className="pokemon">
                                    {" "}
                                    <img src={pokemones.img} alt="pokemon" />
                                </div>
                            </div>
                        </div>
                        <div className="main-modal">
                            <div className="main-modal2">
                                <div className="type">
                                    <button className="type-button">Water</button>
                                </div>
                                <div className="about">
                                    <h3 className="about-titulo">About</h3>
                                    <div className="characteristics">
                                        <div>
                                            <div className="weight-height">
                                                <img src={weight} alt="weight" />
                                                <p>9.0 kg</p>
                                            </div>
                                            <p>Weight</p>
                                        </div>
                                        <div>
                                            <div className="weight-height">
                                                <img src={height} alt="height" />
                                                <p>0.5 m</p>
                                            </div>
                                            <p>Height</p>
                                        </div>
                                        <div>
                                            <p>Torrent Rain-Dish</p>
                                            <p>Moves</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <p>
                                            When it reacts its long neck into its shell, it squirts
                                            out water with vigorous force
                                        </p>
                                    </div>
                                </div>
                                <div className="stats">
                                    <h3 className="stats-title">Base Stats</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Modal;