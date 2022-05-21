import { createUser, getUserBy } from "../../controllers/users";
import notFound from "../../controllers/notFound";

export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            return createUser(req, res)
        case "GET":
            return getUserBy(req, res);
        default: {
            return notFound(res)
        }
    }
}
