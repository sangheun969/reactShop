import React from "react";
// npm install styled-components
import styled from "styled-components";

const HeaderStyle = styled.div`
  font-size: 15px;
  width: 100%;
  height: 60px;
  color: blue;
  background-color: #e3e1e1;
`;

const Header = ({ name }) => {
  return <HeaderStyle width={"60px"}>{name}</HeaderStyle>;
};

export default Header;
