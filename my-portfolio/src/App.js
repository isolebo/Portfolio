

import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className = "App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/about' component={About} />
          <Route  path='/contact' component={ContactMe} />
          <Route  path='/projects' component={Project} />
          <Route  path = '/resume' component={Resume}/>
        
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
