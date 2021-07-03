import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false})
    }, 3000);
  }
  render() {
    const { isLoading } = this.state; 
    return <div>
      {isLoading ? "Loading..." : "I'm ready"}
    </div>; // movie를 render하고 map을 만든 후 movie를 render함.
  }
}
export default App;
