import React, { useEffect, useState } from "react";
import { Category, Header } from "../components/layout";
import axios from "axios";
import Hamburger from "../components/button/Hamburger";
import Form from "../components/layout/Form";
const Login = ({ login, setLogin, user, setUser }) => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const hamburgerOnClick = () => {
    setHamburgerClick(!hamburgerClick);
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const inputId = e.target.id.value;
    const inputPassword = e.target.pw.value;

    const { data: response } = await axios.post(
      "http://localhost:4000/login",
      {
        id: inputId,
        pw: inputPassword,
      }
    );

    if (response === "") {
      setLogin(false);
    } else {
      setUser({
        id: response.Users_id,
        pw: response.Users_password,
      });
      setLogin(true);
    }
  };

  const template = () => {
    return <Category path={"/"} pageName={"메인"} />;
  };

  return (
    <>
      <Header name={"로그인 페이지"} />
      <Hamburger
        isClick={hamburgerClick}
        onClick={hamburgerOnClick}
        children={template()}
      ></Hamburger>

      {login === false ? (
        <Form formSubmitHandler={formSubmitHandler} name="로그인" />
      ) : null}
    </>
  );
};

export default Login;
