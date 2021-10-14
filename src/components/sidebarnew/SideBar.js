import React from "react";
import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import {dashboard,asste,logonew} from '../../images';
import {FaThLarge, FaChartLine, FaTools } from "react-icons/fa";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaFileAlt } from "@react-icons/all-files/fa/FaFileAlt";
import { Link } from 'react-router'
class SideBar extends React.Component {
  render() {
    
    return (

      
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <div className="logo">
			<img src={logonew}/>
        </div>
        </div>

        <Nav className="flex-column pt-2">
        <div className="nav-taxt">Navigation</div>

          <Nav.Item className="active">
            <Nav.Link href="/Dashboard">
            <FaThLarge/>
             Dashboard  
   
            </Nav.Link>
          </Nav.Item>
               <Nav.Item>
            <Nav.Link href="/">
              <FaChartLine/>
             Asset
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/Emplyelist">
            <FaUserTie/>
              Employee
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
            <FaFileAlt/>
            projects
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
             < FaTools/>
             configration
            </Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link href="/Kanban">
             < FaTools/>
             Recruitment
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">
             < FaTools/>
             Job
            </Nav.Link>
          </Nav.Item>
        </Nav>

      </div>
    );
  }
}

export default SideBar;