import React, { useState } from "react";
import "./Minor Components/Input.css";
import Input from "./Minor Components/Input";
import Button from "./Minor Components/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
// import { mainAPI } from "../Auth";
import { isauthenticated } from '../services'
function LoginPage({ onSwitchToSignup }) {
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  function handleUsername(user) {
    setUsername(user);
  }

  function handlePassword(pass) {
    setPassword(pass);
  }
 function notify(param) {
    toast(param);
  }


  function showTrue() {
    notify("Login Successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
  }

  function showFalse() {
    
  }

  async function submit(event) {
    event.preventDefault();

    const isLoggedIn = isauthenticated({username: username, password: password});
    isLoggedIn === true ? showTrue() : notify("Login Failed!")
  }


  return (
    <div className="login-layout-cont">
      <div className="Login-container">
        <form className="login-form">
          <Input Title="Username" Type="text" handleChange={handleUsername} />
          <Input Title="Password" Type="password" handleChange={handlePassword} />
          <Button Title="Login" Type="button" onClick={(e) => submit(e)} />
          <li
            onClick={onSwitchToSignup}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            Don't have an account? Sign up
          </li>
        </form>
      </div>
        <ToastContainer />
    </div>
  );
}

export default LoginPage;
