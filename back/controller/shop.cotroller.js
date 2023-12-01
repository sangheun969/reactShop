const shopService = require("../service/shop.service");

exports.getShopList = async (req, res) => {
  try {
    const response = await shopService.shopList();
    return res.json(response);
  } catch (e) {
    console.log(e);
  }
};

exports.getShop = async (req, res) => {
  const {id} = req.params;

  const response = await shopService.shopDetail(id);
  return res.json(response);
};
exports.postShop = async (req, res) => {
  const {item, count, content} = req.body;

  const response = await shopService.shopRegist(item, count, content);
  return res.json(response);
};

exports.putShop = async (req, res) => {

  const {id} = req.params;
  const {item, count, content} = req.body;

  const response = await shopService.shopUpdate(id, item, count, content);
  return res.json(response);
}

exports.deleteShop = async (req, res) => {
  const {id} = req.params

  const response = await shopService.shopDelete(id);
  return res.json(response);


}