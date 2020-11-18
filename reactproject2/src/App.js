import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router,Link} from "react-router-dom";
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Policy from './pages/Policy/Policy';

import Todolist from './components/todolist/todolist.js'
function App() {
  return (
  <Router>
    <div className="App">
      <h1> Sysmind </h1>
    </div>
	<ul>
	<li>
		<Link to="/AboutUs">About Us</Link>
		
	</li>
	<li>
		<Link to="/Services">Services</Link>
	</li>
	<li>
		<Link to="/Policy">Policy</Link>
	</li>
	</ul>
	 <Todolist />
	<Route path="/AboutUs" component={AboutUs}/>
	<Route path="/Services" component={Services}/>
	<Route path="/Policy" component={Policy}/>
  </Router>
  );
}

export default App;
