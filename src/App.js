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
      const resultado = [...pokemones].filter((pokemon) => {
        return pokemon.nombre.toLowerCase().includes(buscar.toLowerCase())
      })
      setDatosPokemones(resultado)
    }
    else {
      setDatosPokemones(pokemones)
    }
  }

  const ordenAb = () => {
    const pokemonesOrdenados = [...datosPokemones].sort((a, b) => {
      if (a.nombre > b.nombre) return 1;
      if (a.nombre < b.nombre) return -1;
      return 0;
    });
    setDatosPokemones(pokemonesOrdenados);
  };

  const ordenId = () => {
    const pokemonesOrdenados = [...datosPokemones].sort((a, b) => {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      return 0;
    });
    setDatosPokemones(pokemonesOrdenados);
  };

  return (
    <div className="App">
      <Header filtrar={filtrar} ordenAb={ordenAb} ordenId={ordenId}/>
      <Main datosPokemones={datosPokemones} />
    </div>
  );
}

export default App;
