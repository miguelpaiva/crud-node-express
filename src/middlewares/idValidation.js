module.exports = (req, res, next) => {
  const { id: userId } = req.params;

  const checkId = console.users.find((user) => user.id == userId);
  if (checkId == undefined) res.status(400).send("user does not exists");

  next();
};
