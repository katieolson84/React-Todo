// import { render } from '@testing-library/react';
import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            textInput: ""
        }
    }

handleChanges = e => {
    this.setState({
        textInput:e.target.value
    });
}

handleSubmit = e => {
    e.preventDefault();
    this.props.handleAdd(this.state.textInput);
    this.setState({
        textInput:""
    });
}

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input 
            value={this.state.textInput} 
            onChange={this.handleChanges} 
            type="text" 
            name="item" 
            className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            {/* <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div> */}
        </form>
    )
    }
}
export default TodoForm;