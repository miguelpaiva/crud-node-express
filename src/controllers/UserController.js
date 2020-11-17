function generateRandomNum() {
  let randomNum = parseInt(Math.random() * 100000);
  return randomNum;
}

module.exports = {
  async createUser(req, res) {
    const { name, password } = req.body;
    const id = generateRandomNum();

    await console.users.push({ name, password, id });

    return res.json({ name, password, id });
  },

  listUsers(req, res) {
    const listaUsers = console.users.map((user) => user);

    return res.json(listaUsers);
  },

  listUsersByName(req, res) {
    const { name: nameParam } = req.query;

    const listaUsers = console.users.filter(({ name }) => name === nameParam);

    return res.json(listaUsers);
  },

  getUserByID(req, res) {
    const { id: usuarioId } = req.params;

    const findUser = console.users.find((user) => user.id == usuarioId);

    return res.json(findUser);
  },

  changeName(req, res) {
    const { id: usuarioId } = req.params;
    const { name } = req.body;

    const findUser = console.users.find((user) => user.id == usuarioId);
    findUser.name = name;

    return res.json(findUser);
  },

  deleteUser(req, res) {
    const { id: usuarioId } = req.params;

    const findUser = console.users.find((user) => user.id == usuarioId);

    const remove = console.users.indexOf(findUser);
    if (remove > -1) console.users.splice(remove, 1);

    return res.sendStatus(204);
  },
};
