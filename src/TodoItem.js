import { CompleteIcon } from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
import './TodoItem.css'
function TodoItem({completado,text,onComplete,onDelete}){
    return (
      <li className="TodoItem">

      {/* <span className={`Icon Icon-check ${completado && "Icon-check--active"}`}  onClick={onComplete}>
        V
      </span> */}
      <CompleteIcon></CompleteIcon>
      <p className={`TodoItem-p ${completado && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon></DeleteIcon>
      {/* <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span> */}

    </li>
    );
  }
  export {TodoItem}