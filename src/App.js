import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Ingredients from "./Components/Ingredients";
import Receipts from "./Components/Receipts";

function App() {
  const [meal, setMeal] = useState("");

  return (
    <>
      <Counter />
      <Receipts setMeal={setMeal} />
      <Ingredients meal={meal} />
    </>
  );
}

export default App;
