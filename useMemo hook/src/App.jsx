import { useMemo } from "react";
import { useState } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(() => {
    console.log("*********************");
    return add * 10;
  }, [add]);

  return (
    <>
      <h1>useMemo hook</h1>
      {multiplication}
      <h3>Add: {add}</h3>
      <button onClick={() => setAdd(add + 1)}>Increment</button>
      <h3>Substract: {minus}</h3>
      <button onClick={() => setMinus(minus - 1)}>Decrement</button>
    </>
  );
}

export default App;
