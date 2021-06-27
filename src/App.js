import React from "react";

function Food({ favourite }) {
  return <h1>I like {favourite}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramyeon" />
      <Food favourite="삼겹살" />
      <Food favourite="쭈꾸미" />
      <Food favourite="치킨" />
      <Food favourite="피자" />
    </div>
  );
}

export default App;
