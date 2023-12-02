import './TodoCounter.css'

function TodoCounter({completado, faltan}){
    return (
        <h1> Haz completado <span className='span'>{completado}</span> de <span>{faltan}</span> todos</h1>
    )
}

export {TodoCounter}