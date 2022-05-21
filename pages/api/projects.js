import { getAllIssues, getAllProjects } from "../../controllers/projects";
import notFound from "../../controllers/notFound";
import { createIssue } from "../../services";

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return createProject(req, res);
    case "POST":
      return createIssue(req, res);
    case "GET":
      return getAllProjects(req, res);
    case "GET":
      return getAllIssues(req, res);
    default: {
      return notFound(res);
    }
  }
}
