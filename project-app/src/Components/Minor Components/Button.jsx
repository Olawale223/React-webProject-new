import React from "react";

function Button({ Title, Type, onClick }) {
  return (
    <button type={Type} onClick={onClick}>
      {Title}
    </button>
  );
}

export default Button;
