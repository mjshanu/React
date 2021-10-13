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
import Employee from "../pages/Employee";
import Kanban from "../pages/Kanban";
import Emplyelist from "../pages/Emplyelist";

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
    
    </Router>
      </Container>
    );
  }
}

export default Content;