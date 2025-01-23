import React, { useState } from 'react';
import Input from '../Components/Minor Components/Input';
import '../Components/Minor Components/Input.css';
import Button from '../Components/Minor Components/Button';
import axios from 'axios';

function AccessPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    function handleUsername(user) {
      setUsername(user);
    }
  
    function handlePassword(pass) {
      setPassword(pass);
    }
    
    async function submit() {
      let rebody = JSON.stringify({
        "email": username,
        "password" : password
      });
      
      let url =  'http://102.37.214.37:5001/api/v1/auth/signin';
  
      let config ={
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://102.37.214.37:5001/api/v1/auth/signin',
        headers: {
          'Content-Type' : 'application/json'
        },
        data : rebody
      }
  
        console.log(rebody)
        try {
          var response = await axios.post(url,{email: username, password: password});
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
       
      } 
  return (
    <div className="login-layout-cont">
      <div className="Login-container">
        <Input Title="Username"  Type="text"  handleChange={handleUsername}/>
        <Input Title="Password" Type="password" handleChange={handlePassword}  />
        <Button Title="Login" Type="submit" />
      </div>
    </div>
  );
}

export default AccessPage;
// Remember to set your details here and get it in services.js