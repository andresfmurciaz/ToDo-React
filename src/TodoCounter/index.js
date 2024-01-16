import React from 'react'
import './TodoCounter.css'
import {TodoContext} from '../TodoContext'
function TodoCounter(){

    const {todoCompletado, todosTodos} = React.useContext(TodoContext);
    return (
        <h1> Haz completado <span className='span'>{todoCompletado}</span> de <span>{todosTodos}</span> todos</h1>
    )
}

export {TodoCounter}