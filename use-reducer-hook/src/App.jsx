import { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = {
    count: 0,
  };

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };

      case "DECREMENT":
        return { ...state, count: state.count - 1 };

      case "RESET":
        return { ...state, count: 0 };

      default:
        return state;
    }
  };
  const [{ count }, dispatch] = useReducer(counterReducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <h1>Counter App</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>

      <h4>Count: {count}</h4>
    </>
  );
}

export default App;
