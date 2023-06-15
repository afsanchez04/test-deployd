import React from 'react'
import '../stylesheets/Tarea.css'

function Tarea({id, tarea, completada, completarTarea, eliminarTarea}) {
    return (
        <div className="tareas-container">
            <div 
                className="card w-50 m-auto p-2 my-4"
                onClick={ () => completarTarea(id) }
            >
                <div className="d-flex justify-content-between align-items-center">
                    <p className={completada ? 'm-0 completada' : 'm-0'}>
                    {tarea}
                    </p>
                    <button
                        onClick={() => {eliminarTarea(id)}}
                    >
                    Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tarea; 