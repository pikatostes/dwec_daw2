import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>maricones playeros</h1>
      <Testimonio 
      nombre='alvaro'
      pais='maricon'
      imagen='chico'
      cargo='peinaflequillos'
      empresa='matusalem'
      testimonio='maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones maricones '/>
      <Testimonio
      nombre='toto'
      pais='rumania'
      imagen='rumano'
      cargo='estafadora'
      empresa='rumanos puteros s.l.'
      testimonio='putos españoles de mierda'
      />
      </div>
    </div>
  );
}

export default App;
