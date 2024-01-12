import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoButton } from '../TodoButton';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodosPrimerTodo } from '../TodosPrimerTodo';
import React from 'react';
function AppIU ({
    todoCompletado,
    searchValue,
    setSearchValue,
    todosTodos,
    todosFilter,
    completaTodo,
    deleteTodo,
    loading,
    error
}) {


return (
      
<>
        <TodoCounter completado={todoCompletado} faltan={todosTodos}></TodoCounter>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}></TodoSearch>

        <TodoList>


                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {/* si no esta cargando y no tiene elementos  */}
                {(!loading && todosFilter.length === 0 ) && <TodosPrimerTodo/>}
                {/* si no tiene nada que iterar no pasa nada */}
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