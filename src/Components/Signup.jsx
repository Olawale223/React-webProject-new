import React, { useState } from "react";
import "./Minor Components/Input.css";
import Input from "./Minor Components/Input";
import Button from "./Minor Components/Button";
import { ToastContainer, toast } from 'react-toastify';
import { mainAPI } from "../Auth";

function Signup({ onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(user) {
    setUsername(user);
  }

  function handlePassword(pass) {
    setPassword(pass);
  }

  function notify(param) {
    toast(param);
  }

  async function submit(event) {
    event.preventDefault();
    const data = JSON.stringify({ email: username, password: password });
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);

    // const url = "http://102.37.214.37:5001/api/v1/auth/";

    // const config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: url,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // www.facebook.com/account/12332

    // baseURL = "www.facebook.com"
    // entryPoint = "/account/12332/posts"
    // apiEndpoint = baseURL + entryPoint

    try {
      // const response = await mainAPI.post('api/v1/auth/signin', { data });
      // console.log(response.data);
      notify("Sign Up Successful!")
    } catch (error) {
      notify("Sign Up Failed!")
      // console.error(error);
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

      <ToastContainer />
    </div>
  );
}

export default Signup;
