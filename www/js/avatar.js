// Função para carregar avatar salvo
function carregarAvatar() {
  const avatarSalvo = localStorage.getItem("avatar");
  if (avatarSalvo) {
    const avatarElement = document.getElementById("avatar");
    if (avatarElement) {
      avatarElement.src = avatarSalvo;
    }
  }
}

// Abrir modal
function abrirModal() {
  const modal = document.getElementById("avatarModal");
  if (modal) modal.style.display = "flex";
}

// Fechar modal
function fecharModal() {
  const modal = document.getElementById("avatarModal");
  if (modal) modal.style.display = "none";
}

// Trocar avatar e salvar
function trocarAvatar(img) {
  const novoAvatar = img.src;
  const avatarElement = document.getElementById("avatar");

  if (avatarElement) {
    avatarElement.src = novoAvatar;
    localStorage.setItem("avatar", novoAvatar); // salva no navegador
    fecharModal();
  }
}

// Executa quando a página carrega
window.onload = carregarAvatar;
