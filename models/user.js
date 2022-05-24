"use strict";

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    },
    (Users.associate = function (models) {
      Users.hasMany(models.Projects, { as: "Projects" });
      Users.hasMany(models.Issues, { as: "Issues" });
    })
  );
  return Users;
};
