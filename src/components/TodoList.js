import React from 'react';
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {props.toDo.map(item=> (
                <Todo key={item.id} item={item} handleToggle={props.handleToggle}/>
            ))}
            </ul>
                <button onClick={props.handleCompleted} className="clear-complete-btn">Clear Completed</button>
        </div>
    );
};


export default TodoList; 