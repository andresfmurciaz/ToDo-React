
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoButton } from './TodoButton';
import { TodoItem } from './TodoItem';
import React from 'react';

const defaultTodos = [
  {text:'HACER desayuno' , completado:true},
  {text:'hacer desayuno 1' , completado:false},
  {text:'hacer desayuno 2' , completado:true},
  {text:'hacer desayuno 3' , completado:true},
  {text:'hacer desayuno 4' , completado:true},
];

function App() {


const [todos, setTodos]=React.useState(defaultTodos);
const todoCompletado = todos.filter(todo=> !!todo.completado).length;
const todosTodos = todos.length;

//declaro el estado con el renderizado inicial
const [searchValue, setSearchValue] = React.useState('');
console.log(searchValue)

const completaTodo = (text) =>{
  const newTodo = [...todos ]
  const index = newTodo.findIndex((todo)=>todo.text == text)
  newTodo[index].completado  = true;
   setTodos(newTodo)
}


const deleteTodo = (text) =>{
  const newTodo = [...todos ]
  const index = newTodo.findIndex((todo)=>todo.text == text)
  newTodo.splice(index,1);
   setTodos(newTodo)
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
                    <TodoItem key={todo.text} text={todo.text} completado={todo.completado} onComplete={()=>completaTodo(todo.text)}   onDelete={()=>deleteTodo(todo.text)}></TodoItem>
              ))}
              
        </TodoList>
        <TodoButton/>

  </>  
    
  );
}



export default App;
