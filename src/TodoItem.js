import './TodoItem.css'
function TodoItem({completado,text,onComplete,onDelete}){
    return (
      <li className="TodoItem">
      <span className={`Icon Icon-check ${completado && "Icon-check--active"}`}  onClick={onComplete}>
        V
      </span>
      <p className={`TodoItem-p ${completado && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
    );
  }
  export {TodoItem}