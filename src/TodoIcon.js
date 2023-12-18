import React from "react";
import {ReactComponent as CheckSVG} from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg';
const iconTyper = {
 "check" : <CheckSVG></CheckSVG> ,
 "delete" : <DeleteSVG></DeleteSVG>
}

function TodoIcon({type}){

return (<span className=  {`Icon Icon-svg Icon-${type}`} > {iconTyper[type]} </span>)
}

export {TodoIcon}