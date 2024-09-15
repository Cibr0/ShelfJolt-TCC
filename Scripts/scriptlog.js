

let btn = document.querySelector(".fa-eye");

btn.addEventListener("click", () => {
  let inputsenha = document.querySelector("#senha");

  if (inputsenha.getAttribute("type") == "password") {
    inputsenha.setAttribute("type", "text");
  } else {
    inputsenha.setAttribute("type", "password");
  }
});

function entrar() {

  // Novo código para verificar as credenciais no localStorage
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Recuperar os dados do localStorage
  const listaUsuarios = JSON.parse(localStorage.getItem("listaUser")) || [];

  // Verificar se as credenciais são válidas
  const usuarioEncontrado = listaUsuarios.find(user => user.userCad === usuario && user.senhaCad === senha);

  if (usuarioEncontrado) {
    // Credenciais válidas, redirecionar para a página de login
    window.location.href = "index.html";
  } else {
    // Credenciais inválidas, exibir mensagem de erro
    alert("Usuário ou senha inválidos.");
  }
}