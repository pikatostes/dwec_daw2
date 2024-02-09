import "./App.css";
import logo from "./img/apple-touch-icon.png";
import Boton from "./components/Boton";

function App() {
  const manejarClic = () => {
    console.log("Clic");
  }
  const reiniciarContador = () => {
    console.log("Reiniciar");
  }
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="logo freecodecamp"
        ></img>
      </div>
      <div className="contenedor-principal">
        <Boton texto="Clic" esBotonClic={true} manejarClic={manejarClic}/>
        <Boton texto="Reiniciar" esBotonClic={false} manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
