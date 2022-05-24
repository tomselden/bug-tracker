import { getAllProjects } from "../../controllers/projects";
import notFound from "../../controllers/notFound";
import { createIssue } from "../../services";

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return createProject(req, res);
    case "GET":
      return getAllProjects(req, res);
    default: {
      return notFound(res);
    }
  }
}
