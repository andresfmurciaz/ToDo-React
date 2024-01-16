import React from "react";

function useLocalStorage(itemName , initialValue){

  
  const [item,setItem] = React.useState(initialValue);

  const [loading,setLoading] = React.useState(true);
    
  const [error,setError] = React.useState(false);
    
  
  
// se usa para logica que se demore en dar respuesta

 React.useEffect(()=>{
setTimeout(()=>{

  try{

    //VARIABLE QUE SE USA PARA QUE CAPTURE LO QUE TIENE EN EL LOCALSTORAGE y se lopasamos al estado de la lista 
    const localStorageItem = localStorage.getItem(itemName);
    let parsedTodos;
    //cuando el usuario este iniciando por primera vez da el valor a la variable como un null. 
    if( !localStorageItem ){
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedTodos =initialValue;
    }else{

      parsedTodos = JSON.parse(localStorageItem);
        setItem(parsedTodos)
    }


      setLoading(false)
  }catch(error){
    setLoading(false)
      setError(true)
  }


},2000)

 },[])


    
    const saveItem = (newItem) => {
    
      localStorage.setItem(itemName,JSON.stringify(newItem));
    
      setItem(newItem);
    };
    
    // como vamos a retornas mas estdos de justoinhoks
    // return [item,saveItem];
    return {
      item,saveItem,loading,error
    }
    
    }
// esto se va usar en la consola para el localstore , el cual primero creamos la variable on el arreglo lo volvemos caracter

  // const defaultTodos = [
  //   {text:'darle besos a lorena' , completado:false},
  //   {text:'saludar amigas de lorena' , completado:false},
  //  {text:'hacer enojar a lorena' , completado:false},
  //   {text:'omer dorimelos con lorena' , completado:false},
  //   {text:'no morir' , completado:false},
  // ];

  // localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))

  //  localStorage.remoItem('TODOS_V1')
    export {useLocalStorage}