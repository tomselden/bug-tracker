
// creating user in db

export const createUser = ({ username, email, avatarURL }) =>
  fetch("api/users", {
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


// get's called 

export const createProject = ({ project }) =>
  fetch("api/projects", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      project,
    }),
  });

export const createIssue = ({ issue, issueStatus }) =>
  fetch("api/projects", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      issue,
      issueStatus,
    }),
  });

// getting user's data

export const getUserByEmail = (email) =>
  fetch(`api/users?email=${email}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const getProjectsById = ({ project }) =>
  fetch(`api/projects?userID=${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
