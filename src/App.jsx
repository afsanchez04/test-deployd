import { useState } from 'react'
import './App.css'
import logo from './assets/reactlogo.png'
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {

  const [tarea, setTarea ] = useState([]);

  function guardar(e){
    console.log(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = '';
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className='text-primary'>Lista de Tareas</h1>
              <img 
                src={logo} 
                alt="" 
                width="100px" 
              />
            </div>
          </div>
          <div className="col-12">
                <ListaDeTareas />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
