
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoButton } from './TodoButton';
import { TodoItem } from './TodoItem';
import React from 'react';



// esto se va usar en la consola para el localstore , el cual primero creamos la variable on el arreglo lo volvemos caracter

//  const defaultTodos = [
//    {text:'HACER desayuno' , completado:true},
//    {text:'hacer desayuno 1' , completado:false},
//   {text:'hacer desayuno 2' , completado:false},
//    {text:'hacer desayuno 3' , completado:true},
//    {text:'hacer desayuno 4' , completado:true},
//  ];

//  localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))



function App() {

//VARIABLE QUE SE USA PARA QUE CAPTURE LO QUE TIENE EN EL LOCALSTORAGE y se lopasamos al estado de la lista 
const localStorageTodos= localStorage.getItem('TODOS_V1');
let parsedTodos = JSON.parse(localStorageTodos)
//cuando el usuario este iniciando por primera vez da el valor a la variable como un null. 
if( !localStorageTodos ){
  localStorage.setItem('TODOS_V1',JSON.stringify([]));
  parsedTodos = [];
}else{

  parsedTodos = JSON.parse(localStorageTodos);
}

// estado para la lista
const [todos, setTodos]=React.useState(parsedTodos);

// guarda el numero de las tareas completadas y las que no estan completadas , saca un nuevo arreglo con los true
const todoCompletado = todos.filter(todo=> !!todo.completado).length;

const todosTodos = todos.length;

//declaro el estado con el renderizado inicial
const [searchValue, setSearchValue] = React.useState('');
console.log(searchValue)

const saveTodos = (newTodos) => {

  localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));

  setTodos(newTodos);
};




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
