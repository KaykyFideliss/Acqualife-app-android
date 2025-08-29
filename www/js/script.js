document.addEventListener('DOMContentLoaded', function() {
  const togglePassword = document.getElementById('togglePassword');
  
  if (togglePassword) {
    togglePassword.addEventListener('click', function() {
      const password = document.getElementById('password');
      const isPassword = password.type === 'password';
      
      // Alterna o tipo do input
      password.type = isPassword ? 'text' : 'password';
      
      // Alterna o ícone visualmente
      this.classList.toggle('fa-eye-slash');
      this.classList.toggle('fa-eye');
      
      // Feedback visual
      this.style.transform = isPassword 
        ? 'translateY(-50%) scale(1.2)' 
        : 'translateY(-50%) scale(1)';
    });
  }
});

// Função que centraliza a bolinha na aba ativa
function moveCircleTo(el, circle) {
  const offset = el.offsetLeft + (el.offsetWidth / 2) - (circle.offsetWidth / 2);
  circle.style.transform = `translate(${offset}px, -50%)`;
}

// // TROCA DE FOTO DOS AVATARES ----------USER --------------------

// function abrirModal() {
//   document.getElementById("avatarModal").style.display = "flex";
// }

// function fecharModal() {
//   document.getElementById("avatarModal").style.display = "none";
// }

// function trocarAvatar(img) {
//   document.getElementById("avatar").src = img.src;
//   fecharModal();
// }

// // Quando a página carregar, verifica se já tem avatar salvo
// window.onload = function () {
//   const avatarSalvo = localStorage.getItem("avatar");
//   if (avatarSalvo) {
//     document.getElementById("avatar").src = avatarSalvo;
//   }
// };

// function abrirModal() {
//   document.getElementById("avatarModal").style.display = "flex";
// }

// function fecharModal() {
//   document.getElementById("avatarModal").style.display = "none";
// }

// function trocarAvatar(img) {
//   const novoAvatar = img.src;

//   // troca o avatar na tela
//   document.getElementById("avatar").src = novoAvatar;

//   // salva no localStorage
//   localStorage.setItem("avatar", novoAvatar);

//   // fecha o modal
//   fecharModal();
// }

//VER SENHA 

