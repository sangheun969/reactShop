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

exports.shopUpdate = async (id, item, count, content) => {
  try {
    const [uid] = await db.Shop.update({
      Shop_title: item,
      Shop_content: content,
      Shop_count: count,
    }, {
      where: {
        Shop_uid: id
      }
    });


    if(uid === 1){
      const { dataValues: shopItem } = await db.Shop.findOne({
        where: {
          Shop_uid: id,
        },
      });

      return shopItem;
    }

  } catch (e) {}
}

exports.shopDelete = async (id) => {
  try {
    const { dataValues: shopSuccess } = await db.Shop.destroy({
      where: {
        Shop_uid: id
      }
    });

    return shopSuccess;
  } catch (e) {}
}