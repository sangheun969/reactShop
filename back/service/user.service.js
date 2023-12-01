const db = require("../lib/db");
const { Op } = require("sequelize");

exports.signup = async (id, pw) => {
  try {
    const user = db.Users.build({
      Users_id: id,
      Users_password: pw,
    });

    const response = await user.save();

    return response;
  } catch (e) {}
};

exports.login = async (id, pw) => {
  try {
    const { dataValues: user } = await db.Users.findOne({
      where: {
        [Op.and]: [
          {
            Users_id: id,
          },
          { Users_password: pw },
        ],
      },
    });

    return user;
  } catch (e) {}
};
