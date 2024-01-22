import React,{useState} from "react";
import "./App.css";
import Speedometer from "./components/Speedometer";
const App = () => {
  const [speed, setSpeed] = useState(40); // Change this value to set the initial speed

  return (
    <div>
      <Speedometer percentage={speed} />
    </div>
  );
};

export default App;