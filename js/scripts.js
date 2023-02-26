// Seleção de elementos

const links = document.querySelectorAll("#navbar a");
const allLinks = [...links];

// Funções
function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });
}

// Eventos

allLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
});