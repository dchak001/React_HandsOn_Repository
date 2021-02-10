import logo from './logo.svg';
import './App.css';
import { Simple } from './Components/Simple';
import { CurrencyConvertor } from './Components/CurrencyConvertor';

function App() {
  return (
    <div style={{marginTop:300}}>
     <Simple/>
     <br/>
     <CurrencyConvertor/>
    </div>
  );
}

export default App;
