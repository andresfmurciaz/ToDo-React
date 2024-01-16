import './TodoSearch.css'
import React from 'react';
import { TodoContext } from '../TodoContext';
function TodoSearch(){

  const {setSearchValue, searchValue} = React.useContext(TodoContext);
    return (
        <input
        placeholder="Cortar cebolla"
        className="TodoSearch"
        onChange={ (event) =>{ 
          setSearchValue(event.target.value)
         }}
      />
    )
}

export {TodoSearch}