import React from "react";

function useLocalStorage(itemName , initialValue){

    //VARIABLE QUE SE USA PARA QUE CAPTURE LO QUE TIENE EN EL LOCALSTORAGE y se lopasamos al estado de la lista 
    const localStorageItem = localStorage.getItem(itemName);
    let parsedTodos;
    //cuando el usuario este iniciando por primera vez da el valor a la variable como un null. 
    if( !localStorageItem ){
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedTodos =initialValue;
    }else{
    
      parsedTodos = JSON.parse(localStorageItem);
    }
    const [item,setItem] = React.useState(parsedTodos);
    
    const saveItem = (newItem) => {
    
      localStorage.setItem(itemName,JSON.stringify(newItem));
    
      setItem(newItem);
    };
    
    return [item,saveItem];
    
    }

    export {useLocalStorage}