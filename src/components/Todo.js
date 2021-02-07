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
        <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
           <p>{props.item.task}</p> 
        </div>
        </Container>
    )
}

export default Todo
