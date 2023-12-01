import React from "react";
import hamburgerIcon from "../../images/Hamburger_icon.png";
import styled from "styled-components";
import { Category } from "../layout";

const HamburgerButtonStyle = styled.button`
  background-color: white;
  border: 1px solid #d0cfcf;
  width: 300px;
  margin-right: 70%;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
`;

const HamburgerImgStyle = styled.img`
  width: 50px;
  height: 60px;
`;

const HamburgerNavStyle = styled.div`
  max-height: ${(props) => (props.isClick ? "500px" : "0px")};
  visibility: ${(props) => (props.isClick ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const Hamburger = ({ isClick, onClick, children }) => {
  return (
    <HamburgerButtonStyle onClick={onClick}>
      <HamburgerImgStyle src={hamburgerIcon} />
      <HamburgerNavStyle isClick={isClick}>{children}</HamburgerNavStyle>
    </HamburgerButtonStyle>
  );
};

export default Hamburger;
