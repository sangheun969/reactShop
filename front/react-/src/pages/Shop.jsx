import React, { useEffect, useState } from "react";
import { Category, Header } from "../components/layout";
import Hamburger from "../components/button/Hamburger";
import Button from "../components/button/Button";
import axios from "axios";
// import CreateItem from "./CreateItem";

const Shop = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const hamburgerOnClick = () => {
    setHamburgerClick(!hamburgerClick);
  };
  const [shopItems, setshopItems] = useState([]);
  const ListHandler = async () => {
    const { data: shopList } = await axios.get(
      "http://localhost:4000/shop/list"
    );
    setshopItems(shopList);
  };

  useEffect(() => {
    ListHandler();
  }, []);

  // let tempItem = [
  //   // { num: 10, name: "이쁜 셔츠" },
  //   // { num: 20, name: "빈티지 바지" },
  //   // { num: 30, name: "벙거지 모자" },
  // ];

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

      <div
        className="mainItems"
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        {shopItems.map((i, index) => {
          return (
            <div className="userItemsWrap">
              <div key={index} className="userItem">
                <Category
                  pageName={i.Shop_title}
                  path={`/detail/${i.Shop_uid}`}
                />
              </div>
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
