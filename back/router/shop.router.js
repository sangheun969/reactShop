const express = require("express");
const shopRouter = express.Router();
const {
  getShopList,
  getShop,
  postShop,
} = require("../controller/shop.cotroller");

shopRouter.get("/shop/list", getShopList);

shopRouter.get("/shop/:id", getShop);
shopRouter.post("/shop", postShop);

module.exports = shopRouter;
