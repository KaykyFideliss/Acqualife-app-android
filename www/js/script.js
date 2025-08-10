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





