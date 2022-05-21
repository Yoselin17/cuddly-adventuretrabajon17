import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



const App = () => {
  const [frases, setFrases] = useState([]);
  const [frase, setFrase] = useState("");




  const eliminarfrases = indexfrases => {
    let newArray = frases.filter((item, indice) => indice !== indexfrases);

    setFrases(newArray)

  }





  const agregarFrases = event => {


    setFrase(event.target.value);
    console.log(frase);
  }

  function Agregaraqui(e) {
    console.log(Agregaraqui)


  }

  return (
    <div>
      <form
        onSubmit={evento => {
          setFrases(frases.concat(frase));
          evento.preventDefault();
          setFrase("");
        }}>

        <input type="text" name="datos" value={frase} onChange={evento => { setFrase(evento.target.value) }} />

      </form>

      {frases.map((frase, index) => {
        return (
          <ul
            key={index}>
            {frase}
            <button onClick={()=>{eliminarfrases(index)}}>
              Anular
            </button>

          </ul>

        );
      })}



    </div>

  );
}

export default App;
