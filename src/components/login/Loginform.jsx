import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./loginstyle.css";
import {dashboard,asste,logonew,loginbg} from '../../images';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    
    <div className="Login login-bg">
      <div className="leftside-box">
      <div className="logo">
			<img src={logonew}/> 
        </div>
       
        <div className="logobg">
			<img src={loginbg}/>
        </div>
      </div>
      <div className="loginbox">
        <h1 className="white-tx">Welcome</h1>
        <h3 className="white-tx-sm">Login To Your Account </h3>
      <Form onSubmit={handleSubmit} className="form-p">
        <Form.Group size="lg" controlId="email">
          <Form.Label className="label-sty">Username</Form.Label>
          <Form.Control  className="form-control-new" placeholder="Enter Username" autoFocus  type="email"  value={email}  onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label-sty">Password</Form.Label>
          <Form.Control className="form-control-new"  placeholder="Enter Password" type="password" value={password}  onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="check-mag">
        <div className="topping">
        <input type="checkbox" id="topping" name="topping"  className="topping"
        value="Paneer" />
          <span className="keep-login"> Keep me logged in</span> 
      </div>
      
        </div>
        
        <Button block size="lg" type="submit"  className="btn-submit" >
          Login
        </Button>
        <div className="forgot-pass">Forgot Password ? </div>
      </Form>
      
      </div>
      
    </div>
    
  );
}