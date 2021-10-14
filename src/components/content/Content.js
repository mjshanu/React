import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import ReactDOM from "react-dom";
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import Employeeprofile from "../pages/Employeeprofile";
import Kanban from "../pages/Kanban";
<<<<<<< HEAD
import Dashboard from "../pages/Dashboard";
=======
import Emplyelist from "../pages/Emplyelist";

>>>>>>> 3ced6839ef570f3ce593b2100deeca3983f1d073
class Content extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />

        <Router>
     
      <Switch>
<<<<<<< HEAD
            <Router exact path="/Dashboard">
                <Dashboard/>
            </Router>
            <Router path="/Kanban">
                <Kanban/>
            </Router>
            <Router path="/Employeeprofile">
                <Employeeprofile/>
            </Router> 
      </Switch>
=======
      <Router exact path="/">
      <Employee/>
      </Router>
      <Router path="/Kanban">
        <Kanban/>
        </Router>
        <Router path="/Emplyelist">
        <Emplyelist/>
        </Router> 
    </Switch>
>>>>>>> 3ced6839ef570f3ce593b2100deeca3983f1d073
    
    </Router>
      </Container>
    );
  }
}

export default Content;