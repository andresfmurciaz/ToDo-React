import React from "react";
import './TodoForm.css';
import {TodoContext} from '../TodoContext';

function TodoForm (){
    const {setOpenModal,addTodo} = React.useContext(TodoContext);
   // se usa un estado local ya que no es necesario que el contexto sepa cuando se hace cualquier cambio en el texarea
   const [newTodoValue,setNewTodoValue] = React.useState('');

    // cuando se le da click al boton add se llama el metodo addtodo y hay si se le manda el todo que se ingreso y nos ocnectamos al contexto global de la app
    const onSubmit =(event)=>{ 
        event.preventDefault();
        addTodo(newTodoValue);
      // nos ayuda a cerrar el formulario para que se de click en alguno de los botones
      setOpenModal(false);
     
    }
    // nos ayuda a cerrar el modal
    const onCancel =() =>{
        setOpenModal(false)
    }
 
    // para que guarde los cambios del textarea
    const onChange=(event) =>{ setNewTodoValue(event.target.value)};
    return(
// se usa para cuando se le dclink en un boton de add o cancel por defecto el renderiza toda la pagina pero con defaultPrevented no lo hace
<form onSubmit={onSubmit}>
            <label>write your new task</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Cortar cebolla para el"></textarea>
            <div className="TodoForm-buttonContainer">
            <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel} type="button">  cancel</button>
            <button className="TodoForm-button TodoForm-button--add" type="submit">add</button>
            </div>
        </form>
    );
}

export {TodoForm}