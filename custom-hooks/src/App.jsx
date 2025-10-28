import useToggle from "./useToggle";

function App() {
  const [value, toggleValue] = useToggle(true);

  return (
    <>
      <button onClick={toggleValue}>toggle Heading</button>
      <button onClick={() => toggleValue(true)}>Show Heading</button>
      <button onClick={() => toggleValue(false)}>Hide Heading</button>
      {value ? <h1>Custom hooks in react</h1> : null}
    </>
  );
}

export default App;
