const { models } = require("../models");

export const getAllIssues = (query) => models.Issues.findAll(query);

export const getProjectIssuesById = (projectId, userId) =>
  getAllIssues({
    where: {
      projectId,
      userId,
    },
  });

export const createIssue = async (req, res) => {
  try {
    const newIssue = await models.Issues.create(req.body);
    res.json({ issue: newIssue.toJSON() });
  } catch (error) {
    console.log({ error });
    res.status(400).json({ user: null, error });
  }
};
