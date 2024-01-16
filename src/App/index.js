
import { TodoProvider } from '../TodoContext';
import './App.css';
import { AppIU } from './AppIU';
import React from 'react';

function App() {

  return (
    
    <TodoProvider> 
      <AppIU>
      </AppIU>
    </TodoProvider>

  );
}



export default App;
