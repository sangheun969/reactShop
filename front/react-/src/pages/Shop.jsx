import React, { useState } from "react";
import { Category, Header } from "../components/layout";
import Hamburger from "../components/button/Hamburger";

const Shop = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const hamburgerOnClick = () => {
    setHamburgerClick(!hamburgerClick);
  };

  let tempItem = [
    { num: 10, name: "이쁜 셔츠" },
    { num: 20, name: "빈티지 바지" },
    { num: 30, name: "벙거지 모자" },
  ];

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
        {tempItem.map((i, index) => {
          return <Category pageName={i.name} path={`/detail/${index}/1/1`} />;
        })}
      </div>
    </>
  );
};

export default Shop;
