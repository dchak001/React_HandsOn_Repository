import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/Calculator';


function App() {
  return (
    <div className="App">
      <CalculateScore
      name={"Dipan"}
      school={"VMS"}
      total={290}
      goal={3}
      />
    </div>
  );
}

export default App;
