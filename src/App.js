import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Todos from "./components/todos/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/todos/AddTodo";
import About from "./components/pages/About";

// import uuid from "uuid";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res =>
        this.setState({
          todos: res.data
        })
      );
  }

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
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => {
        this.setState({
          todos: [...this.state.todos, res.data]
        });
      });
  };

  delTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addToDo={this.addToDo} />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
