import React, { useState } from 'react'
import Tarea from './Tarea'
import TareaFormulario from './TareaFormulario'


function ListaDeTareas() {

    const [tareas, setTareas] = useState([]); 

    function agregarTarea(tarea){
        console.log("Tarea agregada")
        console.log(tarea)
    }

  return (
    <>
        <TareaFormulario />
        {
            tareas.map( tarea => {
                <Tarea 
                    texto={tarea.texto}
                    completada={tarea.completada}
                />
            })
        }
    </>
  )
}

export default ListaDeTareas