import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import pokemones from "./data/data.js";



function App() {
  const [datosPokemones, setDatosPokemones] = useState(pokemones);
  const filtrar = (buscar) => {
    const resultado = datosPokemones.filter((pokemon) => {
      return pokemon.nombre.toLowerCase().includes(buscar.toLowerCase())
    })
    setDatosPokemones(resultado)
  }
  return (
    <div className="App">
      <Header filtrar={filtrar} />
      <Main datosPokemones={datosPokemones} />
    </div>
  );
}

export default App;
