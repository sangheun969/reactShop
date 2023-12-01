import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ path, name }) => {
  const nav = useNavigate();
  const NavHandler = (_path) => {
    nav(_path);
  };
  return (
    <button
      onClick={() => {
        NavHandler(path);
      }}
    >
      {name}
    </button>
  );
};

export default Button;
