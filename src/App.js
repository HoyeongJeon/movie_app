import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  }
  getMovies = async () => {
     const moives = await axios.get("https://yts.mx/api/v2/list_movies.json");
  }
  componentDidMount() {
   this.getMovies();
  }
  render() {
    const { isLoading } = this.state; 
    return <div>
      {isLoading ? "Loading..." : "I'm ready"}
    </div>; // movie를 render하고 map을 만든 후 movie를 render함.
  }
}
export default App;
