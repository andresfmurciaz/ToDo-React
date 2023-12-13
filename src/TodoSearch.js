import './TodoSearch.css'
import React from 'react';

function TodoSearch({setSearchValue,searchValue}){


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