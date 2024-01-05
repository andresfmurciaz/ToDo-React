
import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoButton } from '../TodoButton';
import { TodoItem } from '../TodoItem';
import React from 'react';
import { useLocalStorage } from './useLocalstorege';



// esto se va usar en la consola para el localstore , el cual primero creamos la variable on el arreglo lo volvemos caracter

  // const defaultTodos = [
  //   {text:'darle besos a lorena' , completado:false},
  //   {text:'saludar amigas de lorena' , completado:false},
  //  {text:'hacer enojar a lorena' , completado:false},
  //   {text:'omer dorimelos con lorena' , completado:false},
  //   {text:'no morir' , completado:false},
  // ];

  // localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))

  // localStorage.remoItem('TODOS_V1')



function App() {


// estado para la lista
//ese estado se conecta con el estado que retornamos en el uselocalstorege
const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);

// guarda el numero de las tareas completadas y las que no estan completadas , saca un nuevo arreglo con los true
const todoCompletado = todos.filter(todo=> !!todo.completado).length;

const todosTodos = todos.length;

//declaro el estado con el renderizado inicial
const [searchValue, setSearchValue] = React.useState('');
console.log(searchValue)


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



  return (
   
<>
        <TodoCounter completado={todoCompletado} faltan={todosTodos}></TodoCounter>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}></TodoSearch>

        <TodoList>

              {todosFilter.map(todo =>(
                    <TodoItem key={todo.text} text={todo.text} 
                    completado={todo.completado}
                     onComplete={()=>completaTodo(todo.text)}   
                     onDelete={()=>deleteTodo(todo.text)}>
                      
                     </TodoItem>
              ))}
              
        </TodoList>
        <TodoButton/>

  </>  
    
  );
}



export default App;
