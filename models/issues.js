"use strict";

module.exports = (sequelize, DataTypes) => {
  const Issues = sequelize.define(
    "Issues",
    {
      issue: DataTypes.STRING,
      projectId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Issues",
    },
    (Issues.associate = function (models) {
      Issues.belongsTo(models.Users, { as: "Users" });
      Issues.belongsTo(models.Projects, { as: "Projects" });
    })
  );
  return Issues;
};
