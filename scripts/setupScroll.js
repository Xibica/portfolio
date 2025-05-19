export function setupSmoothScroll() {

    const smoothScrollTo = (target) => {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const element = document.querySelector(target);
        
        if (element) {
            const offset = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: offset - headerHeight - 20, 
                behavior: 'smooth'
            });
        }
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo(this.getAttribute('href'));
        });
    });

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