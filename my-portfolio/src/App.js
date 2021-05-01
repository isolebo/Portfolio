
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
