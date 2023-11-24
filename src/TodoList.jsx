import React from 'react';
import "./index.css";
const TodoList = (props) => {

   

  return(
    <>
      <div className="todo_style">
        <i className="fa fa-times-circle" color="red" aria-hidden="true" onClick={
            () => {
                props.onSelect(props.id);
            }
        } />
      <li>{props.text}</li>
      </div>
    </>

  )
};

export default TodoList
