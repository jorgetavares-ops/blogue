// Mensagem de boas-vindas
window.addEventListener("load", () => {
    alert("⚽ Bem-vindo ao Futebol Total!");
});

// Ano automático no rodapé
const footer = document.querySelector("footer p");
const ano = new Date().getFullYear();

if (footer) {
    footer.innerHTML = `© ${ano} Futebol Total | Desenvolvido com HTML, CSS e JavaScript`;
}

// Evento dos botões "Leia mais"
const botoes = document.querySelectorAll(".btn");

botoes.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        event.preventDefault();

        const titulo = botao.parentElement.querySelector("h2").textContent;

        alert(`Você selecionou a notícia:\n\n${titulo}`);
    });
});

// Destaque no menu ao passar o mouse
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#ffd700";
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "white";
    });
});
