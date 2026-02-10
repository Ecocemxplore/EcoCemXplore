 <!-- ===== SCRIPT ===== -->
  <script>
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section-page');

    function showSection(id) {
      sections.forEach(section => section.classList.remove('active'));
      const target = document.querySelector(id);
      if (target) target.classList.add('active');
    }

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        showSection(sectionId);
      });
    });

    document.getElementById('btn')?.addEventListener('click', () => {
      showSection('#about-project');
    });
  </script>