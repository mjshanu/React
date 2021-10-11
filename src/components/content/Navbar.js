import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import {dashboard,asste,Grouplog} from '../../images';
import { FiAlignRight } from "@react-icons/all-files/fi/FiAlignRight";
import { BiTimeFive } from "@react-icons/all-files/bi/BiTimeFive";
import { BsBell } from "@react-icons/all-files/bs/BsBell";


class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        bg="light"
        className="navbar shadow-sm p-3 mb-5 bg-white rounded maintop-bar"
        expand
      >
        <Button variant="outline-info" className="hamber-icon" onClick={this.props.toggle}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar>
        <div class="  topbar-col-right">
                 <span className="topbar-icon-right"> <BiTimeFive/></span>
                 <span  className="topbar-icon-right"> <BsBell/></span>
                 <span> 	<img className="topbar-icon-right-img" src={Grouplog}/> <sup className="topbar-icon-right-img-txt">Ayer</sup></span>
               </div>
        </Navbar>
      </Navbar>
    );
  }
}

export default NavBar;