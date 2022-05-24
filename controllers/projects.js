const {models} = require("../models")

export const getAllProjects = (query) => models.Projects.findAll(query);


export const createProject = async (req, res) => {
  try {
    const newProject = await models.Projects.create(req.body);
    res.json({ project: newProject.toJSON() });
  } catch (error) {
    console.log({ error });
    res.status(400).json({ user: null, error });
  }
};

export const getProjectsById = (userId) =>
  getAllProjects({
    where: {
      userId,
    },
  });