import './topbar.css';
import React from "react"; 
import { FiAlignRight } from "@react-icons/all-files/fi/FiAlignRight";
import { BiTimeFive } from "@react-icons/all-files/bi/BiTimeFive";
import { BsBell } from "@react-icons/all-files/bs/BsBell";
export default function Topbar(){
    return (
        <div className='row' >
             <div className='head-style' >
                  <nav class="navbar  ">
                    <div class=" ">
                      <div class="navbar-header">
                        <a class="navbar-brand topbar-icon " href="#"><FiAlignRight /> </a>
                      </div>
                      
                      <ul class="nav navbar-nav navbar-right">
                        <li  className="topbar-icon-right"> <BiTimeFive/></li>
                        <li  className="topbar-icon-right"> <BsBell/></li>
                        <li> <img className="topbar-icon-right topbar-icon-right-img " src="Grouplog.svg" /> Ayer</li>
                      </ul>
                    </div>
                  </nav>
              </div>
              
        </div>
        
      );
}
 