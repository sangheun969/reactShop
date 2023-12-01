const express = require("express");
const shopRouter = express.Router();
const {
  getShopList,
  getShop,
  postShop,
  putShop,
  deleteShop,
} = require("../controller/shop.cotroller");

shopRouter.get("/shop/list", getShopList);
shopRouter.get("/shop/:id", getShop);
shopRouter.post("/shop", postShop);
shopRouter.put("/shop/:id", putShop);
shopRouter.delete("/shop/:id", deleteShop);


module.exports = shopRouter;
