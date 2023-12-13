
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoButton } from './TodoButton';
import { TodoItem } from './TodoItem';
import React from 'react';

const defaultTodos = [
  {text:'hacer desayuno' , completado:true},
  {text:'hacer desayuno 1' , completado:true},
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


  return (
   
<>
        <TodoCounter completado={todoCompletado} faltan={todosTodos}></TodoCounter>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}></TodoSearch>

        <TodoList>

              {defaultTodos.map(todo =>(
                    <TodoItem key={todo.text} text={todo.text} completado={todo.completado}></TodoItem>
              ))}
              
        </TodoList>
        <TodoButton/>

  </>  
    
  );
}



export default App;
