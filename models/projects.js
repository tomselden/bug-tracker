"use strict";

module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define(
    "Projects",
    {
      userId: DataTypes.INTEGER,
      project: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Projects",
    },
    (Projects.associate = function (models) {
      Projects.belongsTo(models.Users, { as: "Users" });
      Projects.hasMany(models.Issues, { as: "Issues" });
    })
  );
  return Projects;
};
