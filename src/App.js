import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./components/style.css"

const toDo = [{
  task: "",
  id: "",
  completed: false
}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {toDo}
  }

  handleToggle = (itemId)=> {
    this.setState({
      toDo: this.state.toDo.map(item => {
        if(itemId ===item.id) {
          return({
            ...item, completed: !item.completed
          });
        }else{
          return(item);
        }
      })
    });
  }

handleAdd = task => {
  this.setState({
    toDo: [...this.state.toDo, { task: task, id: Date.now(), completed:false }]
  })

}

handleCompleted = () => {
  this.setState({
    toDo: this.state.toDo.filter(item=> (!item.completed))
  });
}

// getLocalTasks = () => {
//   let task;
//   if(localStorage.getItem("task") === null) {
//     task = [];
//   }else {
//     task = JSON.parse(localStorage.getItem("task"));
//   }
// }

  render() {
    return (
      <div className="App">
        <div className="header">
          <header>Kate's To Do List!</header>
          <TodoForm handleAdd={this.handleAdd}/>
        </div>
        <TodoList handleCompleted={this.handleCompleted} toDo={this.state.toDo} handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

export default App;
