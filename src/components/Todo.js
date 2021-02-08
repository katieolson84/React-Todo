import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    .item {
        cursor: pointer;
    }
    
    .item.completed{
        text-decoration: line-through;
    } 
`


const Todo = props => {
    const handleClick = ()=> {
        props.handleToggle(props.item.id);
    }

    return (
        <Container>
        <div onClick={handleClick} className={`todo${props.item.completed ? ' completed' : ''}`}>
           <li className="todo-item">{props.item.task}</li> 
           <button className="complete-btn"> <i className="fas fa-check"></i></button>
           {/* <button className="trash-btn"> <i className="fas fa-trash"></i></button> */}
        </div>
        </Container>
    )
}

export default Todo
