const dropMenuButton = document.getElementById('drop-menu');
const menuLinks = document.getElementById('menu-links');

const links = document.querySelectorAll('#menu-links a');

export function drop_down(){
    if (dropMenuButton && menuLinks && links) {
        dropMenuButton.addEventListener('click', () => {
            const isExpanded = dropMenuButton.getAttribute('aria-expanded') === 'true';
            dropMenuButton.setAttribute('aria-expanded', !isExpanded);
            menuLinks.classList.toggle('active');
            
            links.forEach(link => {
                link.classList.remove('link');
                link.classList.add('link-drop-menu');
            }) 
        });
    }
}