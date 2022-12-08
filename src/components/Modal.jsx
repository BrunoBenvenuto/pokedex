import React from 'react'
import "./modal.css";
import pokemones from "../data/data.js";
import weight from "../imgPokemones/Weight.svg"
import height from "../imgPokemones/Height.svg"
import pokeball from "../imgPokemones/Pokeball.png"

function Modal() {
    return (
        <div>
            <div class="modal">

                <div class="header-modal">
                    <div class="pokemon-nombre-div">
                        <div class="flecha-izquierda"></div>
                        <h1 class="pokemon-nombre">Squirtle</h1>
                    </div>
                    <h3 class="pokemon-numero">#007</h3>

                    <div class="div-pokeball">
                        <div class="pokeball"> <img src={pokeball} alt="pokeball" /></div>

                    </div>

                    <div class="div-pokemon">
                        <div class="pokemon"> <img src={pokemones.img} alt="pokemon" /></div>
                    </div>

                </div>

                <div class="main-modal">

                    <div class="main-modal2">
                        <div class="type">
                            <button class="type-button">Water</button>
                        </div>
                        <div class="about">
                            <h3 class="about-titulo">About</h3>
                            <div class="characteristics">
                                <div>
                                    <div class="weight-height">
                                        <img src={weight} alt="weight" />
                                        <p>9.0 kg</p>
                                    </div>
                                    <p>Weight</p>
                                </div>
                                <div>
                                    <div class="weight-height">
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
                            <div class="description">
                                <p>When it reacts its long neck into its shell, it squirts out water with vigorous force</p>
                            </div>
                        </div>
                        <div class="stats">
                            <h3 class="stats-title">Base Stats</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal