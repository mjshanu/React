import React, { useState } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
 

import SideBar from "./components/sidebarnew/SideBar";
import Content from "./components/content/Content";

import Login from "./components/login/Loginform";
import { AuthProvider } from "./context/auth.context";
import "./App.css";
import './css/style.css';
import './css/responsvie.css';
const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  //let HideHeader = window.location.pathname === '/login' && '/Reset'  ? null : <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />;
  let user = localStorage.getItem("user");  

  user = JSON.parse(user);
  console.log(user);
  if (!user || !user.name  === "") {
     window.location.href = "/Login"
   }
  return (
    
    <AuthProvider userData={user}>
    <Router>
      
      <div className="App wrapper">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
       
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
