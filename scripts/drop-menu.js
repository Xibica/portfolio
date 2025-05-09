const dropMenuButton = document.getElementById('drop-menu');
const menuLinks = document.getElementById('menu-links');

export function drop_down(){
    if (dropMenuButton && menuLinks) {
        dropMenuButton.addEventListener('click', () => {
            const isExpanded = dropMenuButton.getAttribute('aria-expanded') === 'true';
            dropMenuButton.setAttribute('aria-expanded', !isExpanded);
            menuLinks.classList.toggle('active');
        });
    }
}