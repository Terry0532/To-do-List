import React from "react";
import API from "../src/api";
import "./App.css";

class App extends React.Component {
  state = {
    todolist: [],
    todo: ""
  }

  componentDidMount() {
    //get all todos and print it
    API.allTodos().then(res => {
      this.setState({ todolist: res.data });
      console.log(this.state.todolist)
    }).catch(err => {
      console.log(err);
    })
  }

  handleInputChange = e => {
    //save user input
    this.setState({ todo: e.target.value });
  }

  addTodo = () => {
    API.addTodo(this.state.todo).then(res => {
      //reload todo list
      this.componentDidMount();
    }).catch(err => {
      console.log(err);
    })

    //clear user input after click add button
    this.setState({ todo: "" });
  }

  deleteTodo = (id) => {
    API.deleteTodo(id).then(res => {
      this.componentDidMount();
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleInputChange} value={this.state.todo}></textarea>
        <button onClick={this.addTodo}>add</button>
        <p>List:</p>
        <table>
          <tbody>
            {this.state.todolist.map(todo => (
              <React.Fragment key={todo.id}>
                <tr>
                  <td>{todo.content}</td>
                  <td><button onClick={() => this.deleteTodo(todo.id)}>delete</button></td>
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
