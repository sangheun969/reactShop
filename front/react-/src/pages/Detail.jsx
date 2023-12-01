import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

import { Header, Category } from "../components/layout";
import axios from "axios";
import Hamburger from "../components/button/Hamburger";
import Button from "../components/button/Button";
// import Form from "../components/layout/Form";

const Detail = () => {
  const nav = useNavigate()

  const [hamburgerClick, setHamburgerClick] = useState(false);
  const hamburgerOnClick = () => {
    setHamburgerClick(!hamburgerClick);
  };
  const [shopItem, setShopItem] = useState({});
  const params = useParams();

  const shopDataList = async () => {
    const { data: userItem } = await axios.get(
      `http://localhost:4000/shop/${params.id}`
    );
    console.log(userItem);
    setShopItem(userItem);
  };

  useEffect(() => {
    shopDataList();
  }, []);

  const shopItemDelete = async() => {
    const { data } = await axios.delete(
        `http://localhost:4000/shop/${params.id}`
    );

    nav("/shop")
  }

  const template = () => {
    return <Category pageName={"메인"} path={"/"} />;
  };

  return (
    <>
      <Header name={"상세 페이지"} />
      <Hamburger
        isClick={hamburgerClick}
        onClick={hamburgerOnClick}
        children={template()}
      ></Hamburger>
      <div>{shopItem.Shop_count}개</div>
      <div>{shopItem.Shop_title}</div>

      <div>
        <div>{shopItem.Shop_content}</div>
      </div>

      <Button path={`/update/${shopItem.Shop_uid}`} name={"상품 수정"}/>
      <button onClick={shopItemDelete}>상품 삭제</button>
    </>
  );
};

export default Detail;
