import { useReducer } from "react";

const Form = () => {
  const initialState = {
    name: "",
    age: 0,
    submitted: false,
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "SETNAME":
        return { ...state, name: action.payload };
      case "SETAGE":
        return { ...state, age: action.payload };
      case "SUBMIT":
        return { ...state, submitted: true };
      default:
        return state;
    }
  };

  const handleNameChange = (e) => {
    dispatch({ type: "SETNAME", payload: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: "SETAGE", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={state.name}
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder="Enter your age"
          value={state.age}
          onChange={handleAgeChange}
        />

        <button type="submit">Submit</button>
      </form>

      <h4>Name : {state.name}</h4>
      <h4>Age: {state.age}</h4>

      {state.submitted && <p>Form submitted</p>}
    </>
  );
};

export default Form;
