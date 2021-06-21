function Food({ favourite }) {
  return <h1>I like {favourite}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="meat" />
      <Food favourite="choco" />
      <Food favourite="chukumi" />
      <Food favourite="kimchi" />
    </div>
  );
}

export default App;
