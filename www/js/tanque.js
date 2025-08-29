async function carregarTanques() {
  try {
    const response = await fetch("http://seuservidor.com/api_tanques.php");
    const data = await response.json(); // array com 3 tanques

    // Atualiza os 3 círculos
    data.forEach((tanque, i) => {
      const perc = Math.round((tanque.nivel / tanque.capacidade) * 100);

      // Seletores
      const circle = document.getElementById(`circle${i+1}`);
      const wave = circle.parentElement.querySelector(".wave");
      const total = document.getElementById(`total${i+1}`);
      const atual = document.getElementById(`atual${i+1}`);

      // Atualiza textos
      circle.textContent = perc + "%";
      total.textContent = "Capacidade: " + tanque.capacidade + "L";
      atual.textContent = "Atual: " + tanque.nivel + "L";

      // Ajusta onda
      const altura = 100 - perc;
      wave.style.transform = `translateY(${altura}%)`;
    });

  } catch (e) {
    console.error("Erro ao carregar tanques:", e);
  }
}

// Chama logo ao abrir
carregarTanques();

// Atualiza a cada 5 segundos
setInterval(carregarTanques, 5000);

// ---------------------SCRIPT DA LINHA DO PH---------------------------

 let ph = 7;

      function atualizarPH(valor) {
        const phValue = document.getElementById("phValue");
        const marker = document.getElementById("marker");
        const numbers = document.querySelectorAll(".numbers span");

        // Atualiza número
        phValue.textContent = valor;

        // Garante que o valor fique entre 1 e 14
        if (valor < 1) valor = 1;
        if (valor > 14) valor = 14;

        // Pega o span correspondente ao valor de pH
        const alvo = numbers[valor - 1];
        const pos = alvo.offsetLeft + alvo.offsetWidth / 2; // centro do número

        // Move o ponteiro para a posição
        marker.style.left = pos + "px";
      }

      // Exemplo: mudando valor a cada 2 segundos (simulando Arduino)
      setInterval(() => {
        ph = Math.floor(Math.random() * 14) + 1; // aleatório entre 1 e 14
        atualizarPH(ph);
      }, 2000);

      // Inicializa
      atualizarPH(ph);  