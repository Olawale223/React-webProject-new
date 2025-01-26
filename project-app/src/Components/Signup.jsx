import React, { useState } from "react";
import "./Minor Components/Input.css";
import Input from "./Minor Components/Input";
import Button from "./Minor Components/Button";
import axios from "axios";

function Signup({ onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(user) {
    setUsername(user);
  }

  function handlePassword(pass) {
    setPassword(pass);
  }

  async function submit(event) {
    event.preventDefault();
    const rebody = JSON.stringify({ email: username, password: password });
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);

    const url = "http://102.37.214.37:5001/api/v1/auth/signin";

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: rebody,
    };

    try {
      const response = await axios(config);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login-layout-cont">
      <div className="Login-container">
        <form className="login-form">
          <Input Title="Username" Type="text" handleChange={handleUsername} />
          <Input Title="Password" Type="password" handleChange={handlePassword} />
          <Button Title="Signup" Type="button" onClick={submit} />
          <li
            onClick={onSwitchToLogin}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            Already have an account? Please login
          </li>
        </form>
      </div>
    </div>
  );
}

export default Signup;
