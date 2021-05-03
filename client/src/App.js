import React from "react";
import API from "../src/api";
import "./App.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class App extends React.Component {
  state = {
    todolist: [],
    todo: "",
    hideButton: "none",
    editodo: "",
    pending: true,
    completed: true,
    status: "all todos"
  }

  componentDidMount() {
    //get all todos and print it
    API.allTodos().then(res => {
      this.setState({ todolist: res.data });
      //if there is completed todo item, show clear all button
      if (this.state.todolist.some(element => element.progress === 1)) {
        this.setState({ hideButton: "" });
      } else {
        this.setState({ hideButton: "none" });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  addTodoInput = e => {
    //save user input to add todo
    this.setState({ todo: e.target.value });
  }

  editodoInput = e => {
    //save user input to edit todo
    this.setState({ editodo: e.target.value });
  }

  addTodo = () => {
    API.addTodo(this.state.todo).then(() => {
      //reload todo list
      this.componentDidMount();
    }).catch(err => {
      console.log(err);
    });

    //clear user input after click add button
    this.setState({ todo: "" });
  }

  deleteTodo = (id) => {
    API.deleteTodo(id).then(() => {
      this.componentDidMount();
    }).catch(err => {
      console.log(err);
    });
  }

  completeTodo = (id) => {
    API.completeTodo(id).then(() => {
      this.componentDidMount();
    }).catch(err => {
      console.log(err);
    });
  }

  clearAllCompletedTodos = () => {
    API.clearAll().then(() => {
      this.componentDidMount();
    }).catch(err => {
      console.log(err);
    });
  }

  editTodo = (id) => {
    API.editTodo(this.state.editodo, id).then(() => {
      this.componentDidMount();
    }).catch(err => {
      console.log(err);
    });
  }

  filter = (button) => {
    if (button === 0) {
      this.setState({
        completed: false,
        pending: true,
        status: "pending todos"
      });
      this.componentDidMount();
    }
    if (button === 1) {
      this.setState({
        completed: true,
        pending: false,
        status: "completed todos"
      });
      this.componentDidMount();
    }
    if (button === 2) {
      this.setState({
        completed: true,
        pending: true,
        status: "all todos"
      });
      this.componentDidMount();
    }
  }

  render() {
    return (
      <div>
        <textarea onChange={this.addTodoInput} value={this.state.todo}></textarea>
        <button onClick={this.addTodo}>add</button>
        <button style={{ display: this.state.hideButton }} onClick={this.clearAllCompletedTodos}>clear all</button>
        <br></br>
        <button onClick={() => this.filter(0)}>pending</button>
        <button onClick={() => this.filter(1)}>completed</button>
        <button onClick={() => this.filter(2)}>all</button>
        <p>{this.state.status}</p>
        <table>
          <tbody>
            {this.state.todolist.map(todo => (
              <React.Fragment key={todo.id}>
                <tr>
                  {
                    todo.progress === 0 && this.state.pending === true
                      ? <React.Fragment>
                        <td>{todo.content}</td>
                        <td><button onClick={() => this.deleteTodo(todo.id)}>delete</button></td>
                        <td><button onClick={() => this.completeTodo(todo.id)}>complete</button></td>
                        <td>
                          <Popup trigger={<button>edit</button>} modal>
                            {close => (
                              <div>
                                <button onClick={close}>&times;</button>
                                <br></br>
                                <textarea onChange={this.editodoInput}></textarea>
                                <div>
                                  <button onClick={() => {
                                    this.editTodo(todo.id);
                                    close();
                                  }}>submit</button>
                                </div>
                              </div>
                            )}
                          </Popup>
                        </td>
                      </React.Fragment>
                      : null
                  }
                </tr>
              </React.Fragment>
            ))}
            {this.state.todolist.map(todo => (
              <React.Fragment key={todo.id}>
                <tr>
                  {
                    todo.progress === 1 && this.state.completed === true
                      ? <React.Fragment>
                        <td><del>{todo.content}</del></td>
                        <td><button onClick={() => this.deleteTodo(todo.id)}>delete</button></td>
                      </React.Fragment>
                      : null
                  }
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
