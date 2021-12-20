import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
        <Link to="/"><button >Home</button></Link>
        <Link to="/about"><button >About</button></Link>
        <Link to="/contact"><button >Contact</button></Link>
        <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/about'}element={<About/>}></Route>
        <Route path={'/contact'}element={<Contact/>}></Route>
      </Routes>
        </Router>
        
     
      </div>
    );
  }
}
export default App;
