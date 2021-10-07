import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/Topbar';
//import Sidebar from './components/Sidebar/Sidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Mainouter from './components/page-main/main-outer';
 
import './css/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/style.css';
import Board from './components/pages/Board';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Sidebar/>
      <Topbar/>
      
      <Switch>
      <Router exact path="/">
      <Mainouter/>
      </Router>
      <Router path="/board">
        <Board/>
        </Router>
        
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
