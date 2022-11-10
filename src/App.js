import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/counter";

function App() {
  const [count, setCount] = useState(0);
  const incrimentCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter chet={count} />
      <Button onClick={incrimentCount} />
      <Button onClick={incrimentCount} />
      <Button onClick={incrimentCount} />
      <Button onClick={incrimentCount} />
    </div>
  );
}

export default App;
