import React, { useState } from "react";
import "./Minor Components/Input.css";
import Input from "./Minor Components/Input";
import Button from "./Minor Components/Button";
import Auth from "../Auth";

function LoginPage({ onSwitchToSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  function handleUsername(user) {
    setUsername(user);
  }

  function handlePassword(pass) {
    setPassword(pass);
  }

  async function submit(event) {
    event.preventDefault();

    // Simulate user validation with localStorage
    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("pass");

    if (storedUser === username && storedPass === password) {
      setIsLoggedIn(true); // Set login status to true
      alert("Login Successful");
    } else {
      alert("Invalid username or password");
    }
  }


  return (
    <div className="login-layout-cont">
      <div className="Login-container">
        <form className="login-form">
          <Input Title="Username" Type="text" handleChange={handleUsername} />
          <Input Title="Password" Type="password" handleChange={handlePassword} />
          <Button Title="Login" Type="button" onClick={submit} />
          <li
            onClick={onSwitchToSignup}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            Don't have an account? Sign up
          </li>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
