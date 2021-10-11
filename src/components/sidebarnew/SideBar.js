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
            <Nav.Link href="/board">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
             Dashboard  
   
            </Nav.Link>
          </Nav.Item>
               <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
             Asset
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              Employee
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            projects
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
             configration
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar;