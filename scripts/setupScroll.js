export function setupSmoothScroll() {
    // Função principal de scroll
    const smoothScrollTo = (target) => {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const element = document.querySelector(target);
        
        if (element) {
            const offset = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: offset - headerHeight - 20, // 20px de margem
                behavior: 'smooth'
            });
        }
    };

    // Aplica a todos os links âncora
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo(this.getAttribute('href'));
        });
    });

    // Corrige a posição ao carregar a página com hash na URL
    const handleHashScroll = () => {
        if (window.location.hash) {
            setTimeout(() => {
                smoothScrollTo(window.location.hash);
            }, 100);
        }
    };

    window.addEventListener('load', handleHashScroll);
    window.addEventListener('hashchange', handleHashScroll);
}