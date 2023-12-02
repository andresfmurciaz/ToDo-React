
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
  return (
   
<>
        <TodoCounter completado={3} faltan={10}></TodoCounter>
        <TodoSearch></TodoSearch>

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
