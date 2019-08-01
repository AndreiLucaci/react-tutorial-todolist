import React from "react";
import "./App.css";

// import exercices

import Todos from "./components/todos/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/todos/AddTodo";

import uuid from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take ou the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner with wife",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Meeting with boss",
        completed: false
      }
    ]
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    });
  };

  addToDo = title => {
	const newTodo = {
		id: uuid.v4(),
		title,
		completed: false
	};
	
	this.setState({
		todos: [...this.state.todos, newTodo]
	});
  }

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addToDo={this.addToDo} />
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
