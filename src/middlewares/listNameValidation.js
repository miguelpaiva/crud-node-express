module.exports = (req, res, next) => {
  const { name: userName } = req.query;

  if (console.users.length === 0)
    return res.status(400).send("Users list is empty");

  // const checkName = console.users.find(({ name }) => name === userName);
  const checkName = console.users.find(({ name }) =>
    name.toUpperCase().includes(userName.toUpperCase())
  );

  if (!checkName) {
    return res.status(400).send("User not found");
  } else {
    return next();
  }
};
