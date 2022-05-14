export const createUser = ({ username, email, avatarURL }) =>
  fetch("/api/users", {
    method: "POST",
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
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
