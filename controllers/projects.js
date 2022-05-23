

const models = require("../models/users");

export const getAllProjects = (query) => modelProject.findAll(query);
export const getAllIssues = (query) => modelProject.findAll(query);

export const createProject = async (req, res) => {
  try {
    const newProject = await models.project.create(req.body);
    res.json({ project: newProject.toJSON() });
  } catch (error) {
    console.log({ error });
    res.status(400).json({ user: null, error });
  }
};

export const createIssue = async (req, res) => {
  try {
    const newIssue = await models.project.create(req.body);
    res.json({ issue: newIssue.toJSON() });
  } catch (error) {
    console.log({ error });
    res.status(400).json({ user: null, error });
  }
};

export const createIssueStatus = async (req, res) => {
  try {
    const newIssueStatus = await models.project.create(req.body);
    res.json({ issueStatus: newIssueStatus.toJSON() });
  } catch (error) {
    console.log({ error });
    res.status(400).json({ user: null, error });
  }
};
