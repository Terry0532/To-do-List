import React from "react";
import API from "../src/api";

class App extends React.Component {
  componentDidMount() {
    API.allTodos().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <textarea></textarea>
        <button>submit</button>
      </div>
    )
  }
}

export default App;
