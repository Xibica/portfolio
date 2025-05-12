const dropMenuButton = document.getElementById('drop-menu');
const menuLinks = document.getElementById('menu-links');

export function drop_down(){
    if (dropMenuButton && menuLinks) {
        dropMenuButton.addEventListener('click', () => {
            const isExpanded = dropMenuButton.getAttribute('aria-expanded') === 'true';
            dropMenuButton.setAttribute('aria-expanded', !isExpanded);

            if(!menuLinks.classList.contains('active')){
                menuLinks.classList.toggle('active');
            }
            else{
            menuLinks.classList.add('closing');
            }

            event.stopPropagation();
        });

        menuLinks.addEventListener('transitionend', (event) => {
            if (event.propertyName === 'transform' && menuLinks.classList.contains('closing')) {
                menuLinks.classList.remove('active', 'closing');
            }
        });

        document.addEventListener('click', (event) => {
            if (menuLinks.classList.contains('active') && !menuLinks.contains(event.target) && event.target !== dropMenuButton) {
                menuLinks.classList.add('closing');
                dropMenuButton.setAttribute('aria-expanded', false);
            }
        });
    }
}