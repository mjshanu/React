import React, { useState } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
 

import SideBar from "./components/sidebarnew/SideBar";
import Content from "./components/content/Content";
import Login from  "./components/admin/auth/Login"
import "./App.css";
import './css/style.css';
import './css/responsvie.css';
const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  let HideHeader = window.location.pathname === '/login' && '/Reset'  ? null : <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />;
 
  return (
    
    <Router>
      
      <div className="App wrapper">
          {HideHeader}
       
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
  );
};

export default App;
