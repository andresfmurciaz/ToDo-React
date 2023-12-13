import './TodoButon.css'
function TodoButton(){
    return(
        <button className='CreateTodoButton' onClick={ ()=>{console.log('esto es un click jeje')}}>+ </button>
    )
}

export {TodoButton}