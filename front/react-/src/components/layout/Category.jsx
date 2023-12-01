import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavItemStyle = styled.div``;

const NavItemButtonStyle = styled.button`
  border: none;
  width: 100%;
  background-color: #bae1b3;
  border-radius: 5px;
  cursor: pointer;
  font-size: 21px;
`;

const Category = ({ path, pageName, login }) => {
  const nav = useNavigate();
  const NavHandler = (_path) => {
    nav(_path);
  };

  return (
    <NavItemStyle>
      {/*<Link to={path}>{pageName} 페이지 이동</Link>*/}
      <NavItemButtonStyle
        onClick={() => {
          NavHandler(path);
        }}
      >
        {pageName} 페이지로 이동
      </NavItemButtonStyle>
      {login}
    </NavItemStyle>
  );
};

export default Category;
