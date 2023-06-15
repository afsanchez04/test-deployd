import React, { useState } from 'react'

function TareaFormulario(props) {

    //Estado para actualizar form
    const [input, setInput] = useState('');
    //Cuando el usuario escriba cambia el estado del formulario
    function manejarCambio (e) {
        //Mientras se hace el console para verificar que funcionó
        console.log('Escribiendo...');
        //Se añade el set input para actualizar el estado
        setInput(e.target.value);
        //Se imprime en console lo que captura e.target.value
        console.log(e.target.value); 
    }
    function manejarEnvio (e){
        e.preventDefault();//Para que no se recargue la página
        console.log('Enviando formulario...')
        const tareaNueva = {
            id: '1',
            texto: input
        }
    }

    return (
        <form 
            className="d-flex justify-content-center mt-5"
            onSubmit={manejarEnvio}
        >
            <input 
                className='form-control'
                type="text" 
                placeholder='Agrega una tarea'
                name="texto"
                onChange={manejarCambio}
            />
            <input className="btn btn-primary" type="submit" value="Add" />
        </form>
    )
}

export default TareaFormulario