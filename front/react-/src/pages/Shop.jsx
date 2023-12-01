import React, { useEffect, useState } from "react";
import { Category, Header } from "../components/layout";
import Hamburger from "../components/button/Hamburger";
import Button from "../components/button/Button";
import axios from "axios";

const Shop = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const hamburgerOnClick = () => {
    setHamburgerClick(!hamburgerClick);
  };
  const [shopItems, setShopItems] = useState([]);
  const ListHandler = async () => {
    const { data: shopList } = await axios.get(
      "http://localhost:4000/shop/list"
    );
    setShopItems(shopList);
  };

  useEffect(() => {
    ListHandler();
  }, []);

  const template = () => {
    return (
      <>
        <Category path={"/"} pageName={"메인"} />
      </>
    );
  };

  return (
    <>
      <Header name={"상품"} />
      <Hamburger
        isClick={hamburgerClick}
        onClick={hamburgerOnClick}
        children={template()}
      ></Hamburger>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {shopItems.map((i, index) => {
          return (
            <div key={index}>
              <Category
                pageName={i.Shop_title}
                path={`/detail/${i.Shop_uid}`}
              />
            </div>
          );
        })}
      </div>
      <div>
        <Button path={"/create"} name={"상품등록"} />
      </div>
    </>
  );
};

export default Shop;
