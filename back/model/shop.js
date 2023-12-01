module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Shop",
    {
      Shop_uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      Shop_title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Shop_content: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Shop_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
};
