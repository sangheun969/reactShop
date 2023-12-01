import React, { useState } from "react";
import { Category, Header } from "../components/layout";
import axios from "axios";

import { Navigate } from "react-router-dom";
import { MyPage } from "./index";
import Hamburger from "../components/button/Hamburger";
import Form from "../components/layout/Form";

const Signup = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [hamburgerClick, setHamburgerClick] = useState(false);
  const hamburgerOnClick = () => {
    setHamburgerClick(!hamburgerClick);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const inputId = e.target.id.value;
    const inputPassword = e.target.pw.value;

    const response = await axios.post("https://localhost:4000/users", {
      id: inputId,
      pw: inputPassword,
    });

    setIsSignup(true);
  };

  const template = () => {
    return <Category path={"/"} pageName={"메인"} />;
  };

  {
    return isSignup === false ? (
      <>
        <Header name={"회원가입 페이지"} />

        <Hamburger
          isClick={hamburgerClick}
          onClick={hamburgerOnClick}
          children={template()}
        ></Hamburger>

        <Form formSubmitHandler={formSubmitHandler} name="회원가입" />
      </>
    ) : (
      <Navigate to={"/login"} />
    );
  }
};

export default Signup;
