import React from 'react'

const Todo = props => {
    const handleClick = ()=> {
        props.handleToggle(props.item.id);
    }

    return (
        <div onClick={handleClick} className={`todo${props.item.completed ? ' completed' : ''}`}>
           <li>{props.item.task}</li> 
           {/* <button className="complete-btn"> <i className="fas fa-check"></i></button> */}
        </div>
    )
}

export default Todo
