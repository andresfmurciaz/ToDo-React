import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import './TodoItem.css'
function TodoItem({completado,text,onComplete,onDelete}){
    return (
      <li className="TodoItem">

      <CompleteIcon completed={completado} onComplete={onComplete}/>

      <p className={`TodoItem-p ${completado && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon onDelete = {onDelete}></DeleteIcon>
  
    </li>
    );
  }
  export {TodoItem}