import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(prev => prev + 1);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
