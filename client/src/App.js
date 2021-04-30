import React from "react";

class App extends React.Component {
  componentDidMount() {
    console.log("hi")
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
