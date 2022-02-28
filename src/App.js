import "./App.css";
import { CalculatorFrame } from "./components/CalculatorFrame";
import { Title } from "./components/Title";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Title />
        <CalculatorFrame />
      </div>
    </div>
  );
}

export default App;
