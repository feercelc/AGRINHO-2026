/* =========================
   BOTÃO "SAIBA MAIS"
========================= */

function mostrarMensagem() {

    const mensagem = document.getElementById("mensagemBanner");

    mensagem.textContent =
        "A tecnologia pode ajudar o campo a produzir mais utilizando melhor a água, o solo e a energia.";

    mensagem.style.opacity = "0";

    setTimeout(() => {
        mensagem.style.transition = "opacity 0.5s";
        mensagem.style.opacity = "1";
    }, 100);
}


/* =========================
   CALCULADORA DE SUSTENTABILIDADE
========================= */

function calcularSustentabilidade() {

    const agua = Number(document.getElementById("agua").value);
    const energia = Number(document.getElementById("energia").value);
    const solo = Number(document.getElementById("solo").value);
    const tecnologia = Number(document.getElementById("tecnologia").value);

    const total = agua + energia + solo + tecnologia;

    const resultado = document.getElementById("resultadoCalculadora");

    let mensagem = "";
    let cor = "";

    if (total <= 30) {

        mensagem =
            `Sua pontuação foi ${total}/80. 🌱 Você pode adotar mais práticas sustentáveis!`;

        cor = "#ffe5e5";

    } else if (total <= 60) {

        mensagem =
            `Sua pontuação foi ${total}/80. 🌿 Você está no caminho certo!`;

        cor = "#fff3cd";

    } else {

        mensagem =
            `Sua pontuação foi ${total}/80. 🌎 Excelente! Suas práticas são bastante sustentáveis!`;

        cor = "#d9f7df";
    }

    resultado.textContent = mensagem;

    resultado.style.display = "block";
    resultado.style.backgroundColor = cor;

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================
   VALIDAÇÃO DO FORMULÁRIO
========================= */

const formulario = document.getElementById("formularioContato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const resposta = document.getElementById("mensagemFormulario");

    if (nome === "" || email === "" || mensagem === "") {

        resposta.textContent =
            "⚠️ Por favor, preencha todos os campos.";

        resposta.style.color = "#d63031";

        return;
    }

    if (!email.includes("@") || !email.includes(".")) {

        resposta.textContent =
            "⚠️ Digite um e-mail válido.";

        resposta.style.color = "#d63031";

        return;
    }

    resposta.textContent =
        "✅ Mensagem enviada com sucesso! Obrigado pela participação.";

    resposta.style.color = "#27ae60";

    formulario.reset();
});


/* =========================
   ANIMAÇÃO DAS SEÇÕES
========================= */

const secoes = document.querySelectorAll(".section");

const observador = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
            }

        });

    },

    {
        threshold: 0.15
    }
);

secoes.forEach(function(secao) {
    observador.observe(secao);
});


/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const botaoTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";
    }
});


function voltarAoTopo() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}