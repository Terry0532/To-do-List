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
    console.log(this.state.todo)

    //clear user input after click add button
    this.setState({ todo: "" });
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
              <tr>
                <td>{todo.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
