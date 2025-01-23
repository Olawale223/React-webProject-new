import React, { useState } from 'react';
import './Input.css';

export default function Input({ Title, Type }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (value) => {
    setInputValue(value);
    TextValidation(value);
  };

  const TextValidation = (value) => {
    const input = parseFloat(value);
    if (isNaN(input)) {
      alert("Please enter valid values for " + Title);
      return;
    }
  };

  return (
    <div id="inputcontainer">
      <label htmlFor={Title.toLowerCase()}>{Title}:</label>
      <input id={Title} type={Type} onChange={(event) => handleChange(event.target.value)} />
    </div>
  );
}
