import React,{useState} from 'react';
import ReactDOM from 'react-dom';

function Todoitem(props){
    return (
        <li onClick={() => 
            props.onChecked(props.id)}>

        {props.text}
            
        </li>
    );
}

export default Todoitem;

