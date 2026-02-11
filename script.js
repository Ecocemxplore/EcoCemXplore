// Selección de elementos
const navItems = document.querySelectorAll('.nav-icons li');
const content = document.getElementById('content');
const title = document.getElementById('title');

// Contenido de cada página
const pages = {
    about: `
        <section class="page-section active" id="about">
            <h2>About EcoCemXplore</h2>
            <p>EcoCemXplore es un proyecto Marie Curie dedicado a la investigación ecofriendly en materiales de construcción innovadores.</p>
        </section>
    `,
    team: `
        <section class="page-section active" id="team">
            <h2>Team</h2>
            <p>Conoce a nuestro equipo de investigadores, ingenieros y colaboradores internacionales que trabajan en EcoCemXplore.</p>
        </section>
    `,
    news: `
        <section class="page-section active" id="news">
            <h2>News</h2>
            <p>Mantente actualizado con las últimas noticias, publicaciones y eventos del proyecto EcoCemXplore.</p>
        </section>
    `,
    contacts: `
        <section class="page-section active" id="contacts">
            <h2>Contacts</h2>
            <p>Contáctanos a través de nuestro correo electrónico o redes sociales para más información.</p>
        </section>
    `
};

// Función para mostrar sección
function showPage(page) {
    content.innerHTML = pages[page];
}

// Navegación
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const page = item.getAttribute('data-page');
        showPage(page);
    });
});

// Click en título redirige a About Project
title.addEventListener('click', () => {
    showPage('about');
});
