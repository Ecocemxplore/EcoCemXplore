const navItems = document.querySelectorAll('.nav-icons li');
const content = document.getElementById('content');
const title = document.getElementById('title');

// Contenido de cada página con tarjetas y diseño bonito
const pages = {
    about: `
        <section class="page-section active" id="about">
            <div class="hero">
                <h2>About EcoCemXplore</h2>
                <p>EcoCemXplore es un proyecto Marie Curie dedicado a la investigación eco-friendly en materiales de construcción sostenibles e innovadores. Nuestra misión es crear soluciones que reduzcan el impacto ambiental y promuevan la economía circular.</p>
            </div>
        </section>
    `,
    team: `
        <section class="page-section active" id="team">
            <div class="hero">
                <h2>Team</h2>
                <p>Conoce a nuestro equipo de investigadores, ingenieros y colaboradores internacionales que trabajan en EcoCemXplore.</p>
            </div>
        </section>
    `,
    news: `
        <section class="page-section active" id="news">
            <div class="hero">
                <h2>News</h2>
                <p>Mantente actualizado con las últimas noticias, publicaciones y eventos del proyecto EcoCemXplore.</p>
            </div>
        </section>
    `,
    contacts: `
        <section class="page-section active" id="contacts">
            <div class="hero">
                <h2>Contacts</h2>
                <p>Contáctanos a través de nuestro correo electrónico o redes sociales para más información.</p>
            </div>
        </section>
    `
};

// Mostrar sección
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

// Click en título redirige a About
title.addEventListener('click', () => {
    showPage('about');
});
