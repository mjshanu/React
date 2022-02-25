import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";

import Topbar from "./Topbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect,
  Link
} from "react-router-dom"; 
import Employeeprofile from "../pages/Employeeprofile";
import Kanban from "../pages/Kanban";
import Emplyelist from "../pages/Emplyelist";
import Dashboard from "../pages/Dashboard";
import Job from "../pages/job";
import UncontrolledBoard from "../pages/Dragslider";
import Newdrag from "../pages/Newdrgbox.jsx";
import Addemployeetab from "../pages/Addemployeetabs";
import  Organizationold from "../pages/Organizationold";
import Addassets from "../pages/Addassets";
import Addcategory from "../pages/Addcategory";
import Addproperty from '../pages/Addproperty';
import Organization from "../pages/Organization";

import Assets from "../pages/Assets";
import Assetsdetails from "../pages/Assetsdetails";
import Organizationlist from "../pages/Organizationlist";
import OfferReleasereport from "../pages/Onboarding";
import Offboarding from "../pages/Offboarding";
<<<<<<< HEAD
import Login from "../admin/auth/Login";
=======
import Login from "../login/Loginform";
>>>>>>> 7d8a4cf43ea1064e0c9389515bbbe2ed0cd7bccd
const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
    <Route
                exact
                path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/Assetsdetails" /> :
                      <Redirect to="/Employeeprofile" /> 
                    )
                }}
              />
    <Route exactly path="/Dashboard" component={Dashboard} />
    <Route exactly path="/Kanban" component={Kanban} />
    <Route exact path="/Assets" component={Assets} />
    <Route exact path="/Assetsdetails" component={Assetsdetails} />
    <Route exact path="/Emplyelist" component={Emplyelist} />
    <Route exact path="/Employeeprofile" component={Employeeprofile} />
    <Route exact path="/Job" component={Job} />
    <Route exact path="/Addemployeetab" component={Addemployeetab} />  

    <Route exact path="/OfferReleasereport" component={OfferReleasereport} />  
    <Route exact path="/Offboarding" component={Offboarding} />  
        <Router path="/Addemployeetab">
        <Addemployeetab/>
        </Router> 
        <Router path="/Organization">
        <Organization/>
        </Router> 
        <Router path="/Addassets">
        <Addassets/>
        </Router> 
        <Router path="/Addcategory">
        <Addcategory/>
        </Router> 
             <Router path="/Addproperty">
        < Addproperty/>
        </Router> 
        <Router path="/Organizationlist">
        <Organizationlist/>
        </Router>
        <Router path="/Organizationold">
        <Organizationold/>
        </Router>
        <Router path="/Organizationold">
        < Organizationold/>
        </Router>
<<<<<<< HEAD
        <Router path="/login">
        < Login/>
        </Router>

=======
        <Route exact path="/Loginform">
          <Login />
        </Route> 
>>>>>>> 7d8a4cf43ea1064e0c9389515bbbe2ed0cd7bccd
    </Switch>
  </Container>
);

export default Content;
