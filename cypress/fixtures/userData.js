module.exports = {
  validCredentials: {
    nome: "Joao Coutinho",
    email: `joao.coutinho${Date.now()}@email.com`,
    password: "senha1234",
    administrador: "false"
  },
  invalidCredentials: {
    nome: "",
    email: "joaocoutinhoadmin@email.com",
    password: "senha1234",
    administrador: "false"
  }
}