import Fruits from "./components/Fruits";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  function Data(f) {
    return f;
  }
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits data={Data} />
      <Counter data={Data} />
    </div>
  );
}

export default App;
