import { createIssue, getAllIssues } from "../../controllers/issue";

import (createIssue)

export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            return createIssue(req, res)
        case "GET":
            return getAllIssues(req, res);
        default: {
            return notFound(res)
        }
    }
}