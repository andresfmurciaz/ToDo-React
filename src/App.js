
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoButton } from './TodoButton';
import { TodoItem } from './TodoItem';
function App() {
  return (
    <div className="App">

        <TodoCounter></TodoCounter>
        <TodoSearch></TodoSearch>

        <TodoList>

              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              
        </TodoList>
        <TodoButton/>
    
    </div>
  );
}



export default App;
