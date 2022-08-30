// CRUD - CREATE, READ, UPDATE, DELETE

// CREATE

const usuarios = [];

// objeto registra na tabela (vetor = usuario)

const novoUsuario = {
  nome: "Gustavo",
  email: "gustavohehexd@hotmail.com",
  senha: "soulindo1010",
};

const criarUsuario = (usuario) => {
  usuarios.push(usuario);
};
criarUsuario(novoUsuario);

const verUsuarios = () => {
  return usuarios;
};

console.log("Usuarios: ", verUsuarios());
