import { useState } from "react";
import Child from "./Child";
import { useCallback } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const learning = useCallback(() => {
    // ...some operation
  }, [count]);
  return (
    <>
      <h1>UseCallback Hook</h1>
      <Child learning={learning} />
      <h3>Add: {add}</h3>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 2)}>Increment Count</button>
    </>
  );
}

export default App;
