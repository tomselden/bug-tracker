export const createUser = ({ username, email, avatarURL }) =>
  fetch("/api/users", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      avatarURL,
    }),
  });

export const getUserByEmail = (email) =>
  fetch(`/api/users?email=${email}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  export const createProject = ({ project }) =>
  fetch("/api/projects", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      project
    }),
  });

  export const createIssue = ({ issue }) =>
  fetch("/api/projects", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      issue
    }),
  });

  export const createIssueStatus = ({ issueStatus }) =>
  fetch("/api/projects", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      issueStatus
    }),
  });