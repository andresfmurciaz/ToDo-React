import React from "react";
import { useLocalStorage } from "./useLocalstorege";
// esto se usa para declarar un contexto
const TodoContext = React.createContext();
function TodoProvider({children}){


// estado para la lista
//ese estado se conecta con el estado que retornamos en el uselocalstorege
//se cambia la forma de importar ya que se estan usando dos estados mas loading y error
const {item : todos, saveItem: saveTodos,loading,error} = useLocalStorage('TODOS_V1',[]);

// guarda el numero de las tareas completadas y las que no estan completadas , saca un nuevo arreglo con los true
const todoCompletado = todos.filter(todo=> !!todo.completado).length;

const todosTodos = todos.length;

//declaro el estado con el renderizado inicial
const [searchValue, setSearchValue] = React.useState('');
console.log(searchValue)

// estado para el modal
const [openModal, setOpenModal] = React.useState(true);

// marca el todo como completado
const completaTodo = (text) =>{
  const newTodo = [...todos ]
  const index = newTodo.findIndex((todo)=>todo.text == text)
  newTodo[index].completado  = true;
   saveTodos(newTodo)
}

//elimina el todo 
const deleteTodo = (text) =>{
  const newTodo = [...todos ]
  const index = newTodo.findIndex((todo)=>todo.text == text)
  newTodo.splice(index,1);
   saveTodos(newTodo)
}

//me filtra los TODO que conin
const todosFilter = todos.filter((todo) => {
  return todo.text.toLowerCase().includes(searchValue.toLowerCase())
});



return(

    <TodoContext.Provider value =  {{
        todoCompletado,
        searchValue,
       setSearchValue,
        todosTodos,
       todosFilter,
        completaTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal
   }}> {children}
    
    </TodoContext.Provider>
    );

}


export {TodoContext, TodoProvider}