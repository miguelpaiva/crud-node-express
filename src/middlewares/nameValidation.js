module.exports = (req, res, next) => {
  const { name: userName } = req.body;

  if (console.users.length === 0) return next();

  const checkName = console.users.find(
    ({ name }) => name.toUpperCase() === userName.toUpperCase()
  );

  if (checkName)
    return res
      .status(400)
      .send(`User ${userName} already exists, try another name`);

  next();
};
