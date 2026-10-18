
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // =========================================
  // PERSONALIZE AQUI
  // =========================================
  const nomeAniversariante = "Minha pessoa especial";

  // =========================================
  // ELEMENTOS DO CARTÃO
  // =========================================
  const intro = document.getElementById("intro");
  const envelope = document.getElementById("envelope");
  const openButton = document.getElementById("openEnvelope");
  const clickHint = document.getElementById("clickHint");
  const birthdayCard = document.getElementById("birthdayCard");
  const herName = document.getElementById("herName");
  const surpriseButton = document.getElementById("surpriseButton");
  const surprise = document.getElementById("surprise");
  const stars = document.getElementById("stars");
  const magicLayer = document.getElementById("magicLayer");

  // Se algum elemento essencial estiver faltando,
  // mostramos o erro no console.
  if (!intro || !envelope || !openButton || !birthdayCard) {
    console.error(
      "Erro: confira os IDs do HTML e se os três arquivos estão corretos."
    );
    return;
  }

  // Atualiza o nome na carta
  if (herName) {
    herName.textContent = nomeAniversariante;
  }

  // =========================================
  // ESTRELAS DO FUNDO
  // =========================================
  function createStars() {
    if (!stars) return;

    stars.replaceChildren();

    for (let i = 0; i < 75; i++) {
      const star = document.createElement("span");
      const size = Math.random() * 3 + 1;

      star.className = "star";
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";

      star.style.setProperty(
        "--duration",
        Math.random() * 3 + 2 + "s"
      );

      star.style.animationDelay = Math.random() * 3 + "s";

      stars.appendChild(star);
    }
  }

  // =========================================
  // PARTÍCULAS MÁGICAS
  // =========================================
  function createMagicParticles(amount) {
    if (!magicLayer) return;

    const symbols = ["✦", "✧", "✨", "✶", "·"];
    const colors = [
      "#a4e3bd",
      "#d8e7df",
      "#74c99b",
      "#c8d5d0"
    ];

    for (let i = 0; i < amount; i++) {
      const particle = document.createElement("span");
      const duration = Math.random() * 4 + 4;

      particle.className = "particle";
      particle.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      particle.style.left = Math.random() * 100 + "%";
      particle.style.fontSize = Math.random() * 15 + 10 + "px";
      particle.style.color =
        colors[Math.floor(Math.random() * colors.length)];

      particle.style.setProperty(
        "--duration",
        duration + "s"
      );

      particle.style.animationDelay = Math.random() + "s";

      magicLayer.appendChild(particle);

      window.setTimeout(function () {
        particle.remove();
      }, (duration + 2) * 1000);
    }
  }

  // Inicializa os efeitos de fundo
  createStars();

  // =========================================
  // ABERTURA DO ENVELOPE
  // =========================================
  let envelopeOpened = false;

  openButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (envelopeOpened) return;

    envelopeOpened = true;
    console.log("Envelope clicado!");

    envelope.classList.add("open");

    if (clickHint) {
      clickHint.textContent =
        "✦ SUA MENSAGEM MÁGICA ESTÁ CHEGANDO... ✦";
    }

    createMagicParticles(35);

    // Revela a carta após a animação
    window.setTimeout(function () {
      intro.classList.add("hidden");
      birthdayCard.classList.remove("hidden");

      createMagicParticles(30);

      birthdayCard.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      console.log("Carta revelada com sucesso!");
    }, 1000);
  });

  // =========================================
  // SURPRESA FINAL
  // =========================================
  let surpriseRevealed = false;

  if (surpriseButton && surprise) {
    surpriseButton.addEventListener("click", function (event) {
      event.preventDefault();

      if (surpriseRevealed) return;

      surpriseRevealed = true;

      surprise.classList.remove("hidden");
      surpriseButton.textContent = "💚 SURPRESA REVELADA!";

      createMagicParticles(55);

      window.setTimeout(function () {
        surprise.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 150);
    });
  }

  // =========================================
  // MAGIA EXTRA AO CLICAR NA CARTA
  // =========================================
  birthdayCard.addEventListener("click", function (event) {
    if (event.target.closest("button")) return;

    createMagicParticles(5);
  });

  console.log("Sonserina carregada! Tudo pronto para a magia.");
});
