const models = require("../models");


export const getOneUserBy = (query) => models.users.findOne(query)



export const getUsersByEmail = (email) =>
  getOneUserBy({
    where: {
      email,
    },
  });

export const getUserBy = async (req, res) => {
  const { email } = req.query;
  let user = null;

  try {
    if (email) {
      user = await getUsersByEmail(email);
    }
  } catch (e) {
    console.log({ e });
    // not sure what to do here
  }

  res.json({ user });
};

export const createUser = async (req, res) => {
  try {
    const newUser = await models.users.create(req.body);
    res.json({ user: newUser.toJSON() });
  } catch (error) {
    console.log({ error });
    res.status(400).json({ user: null, error });
  }
};
