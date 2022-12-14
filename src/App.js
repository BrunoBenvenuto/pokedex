import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import pokemones from "./data/data.js";
import Modal from './components/Modal';


function App() {
  const [datosPokemones, setDatosPokemones] = useState(pokemones);
  const filtrar = (buscar) => {
    if (buscar !== "") {
      const resultado = [...datosPokemones].filter((pokemon) => {
        return pokemon.nombre.toLowerCase().includes(buscar.toLowerCase())
      })
      setDatosPokemones(resultado)
    }
    else {
      setDatosPokemones(pokemones)
    }

  }

  return (
    <div className="App">
      <Header filtrar={filtrar} />
      <Main datosPokemones={datosPokemones} />
      <Modal datosPokemones={pokemones} />
    </div>
  );
}

export default App;
