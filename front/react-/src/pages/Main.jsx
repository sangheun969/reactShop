import React, { useEffect, useState } from "react";
import { Header, Category } from "../components/layout";
import Hamburger from "../components/button/Hamburger";

const Main = ({ login }) => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const hamburgerOnClick = () => {
    setHamburgerClick(!hamburgerClick);
  };

  const template = () => {
    return (
      <>
        {login === true ? (
          <Category path={"/mypage"} pageName={"마이"} login={login} />
        ) : (
          <>
            <Category path={"/signup"} pageName={"회원가입"} login={login} />
            <Category path={"/login"} pageName={"로그인"} login={login} />
          </>
        )}
        <Category path={"/shop"} pageName={"상품"} login={login} />
      </>
    );
  };

  return (
    <>
      <Header name={"메인 페이지"} />
      <Hamburger
        isClick={hamburgerClick}
        onClick={hamburgerOnClick}
        children={template()}
      ></Hamburger>
    </>
  );
};

export default Main;
