import React from "react";
// ponerle diferentes nombre ya que se van aimpoirtar varios svgs
import {ReactComponent as CheckSVG} from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';
// condicional
const iconTyper = {
 "check" : (color)=> <CheckSVG  className='Icon-svg' fill={color}></CheckSVG> ,
 "delete" : (color)=><DeleteSVG className='Icon-svg' fill={color}></DeleteSVG>
}

function TodoIcon({type,color,onClick}){
// clases dinamicas por las clases de cada icono 
return (<span className=  {`Icon  Icon-${type}`} onClick={onClick} > {iconTyper[type](color)} </span>)

}

export {TodoIcon}