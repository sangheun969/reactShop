const db = require("../lib/db");
const { Op } = require("sequelize");

exports.shopList = async () => {
  try {
    const shopItems = await db.Shop.findAll();

    return shopItems !== undefined ? shopItems : [];
  } catch (e) {
    console.log(e);
  }
};

exports.shopDetail = async (id) => {
  try {
    const { dataValues: shopItem } = await db.Shop.findOne({
      where: {
        Shop_uid: id,
      },
    });

    return shopItem;
  } catch (e) {
    console.log("item", e);
  }
};
exports.shopRegist = async (item, count, content) => {
  try {
    const { dataValues: shopSuccess } = await db.Shop.create({
      Shop_title: item,
      Shop_content: content,
      Shop_count: count,
    });

    return shopSuccess;
  } catch (e) {}
};
