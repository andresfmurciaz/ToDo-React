import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoButton } from '../TodoButton';
import { TodoItem } from '../TodoItem';
import React from 'react';
function AppIU ({
    todoCompletado,
    searchValue,
    setSearchValue,
    todosTodos,
    todosFilter,
    completaTodo,
    deleteTodo
}) {


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
export  {AppIU};