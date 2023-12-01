import React from "react";
import { Category, Header } from "../components/layout";

const MyPage = ({ login, user }) => {
  return (
    <>
      <Header name={"마이 페이지"} />
      <div>userinfo</div>
      <div>
        유저 아이디: {user.id} 유저 비번: {user.pw}{" "}
      </div>
      <Category path={"/"} pageName={"메인"} />
    </>
  );
};
export default MyPage;
