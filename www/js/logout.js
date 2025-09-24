function logout() {
  // remove dados do usuário
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  window.location.href = "logout.php"; // chama o PHP que destrói a sessão
}