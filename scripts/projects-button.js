const webHref = [
    'https://www.google.com/',
    'https://www.youtube.com/',
    'https://www.google.com/',
    'https://www.youtube.com/',
    'https://www.google.com/'
];
const gitHref = [
    'https://www.tiktok.com/foryou',
    'https://op.gg/',
    'https://www.tiktok.com/foryou',
    'https://op.gg/',
    'https://www.tiktok.com/foryou',
]

const border = document.querySelector('#projectsUL');

const button = document.getElementById("trade-mode");
const links = document.querySelectorAll("#projectsUL a");
const htmlIcon = `
    <svg class="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
    </svg>`;
const gitIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.385c.6.11.82-.26.82-.577v-2.262c-3.338.725-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.832 2.807 1.303 3.492.996.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.38 1.235-3.22-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.119 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.103.823 2.222v3.293c0 .32.217.694.825.576A12.006 12.006 0 0024 12c0-6.627-5.373-12-12-12z"/>
    </svg>`;

let showingGithub = false;

export function tradeMode() {
    button.addEventListener('click', () => {
        button.classList.remove("animate-flip-first", "animate-flip-second");
        void button.offsetWidth;
        button.classList.add("animate-flip-first");

        button.addEventListener('animationend', function handler(e) {
            if (e.animationName === 'flip-first') {
                button.removeEventListener('animationend', handler);

                links.forEach((link, index) => {
                    link.href = showingGithub ? webHref[index] : gitHref[index];
                    setTimeout(() =>{
                        link.classList.add("glow");
                        link.addEventListener("animationend", () => {
                            link.classList.remove("glow")
                        });
                    },index * 160)
                });

                button.innerHTML = showingGithub ? htmlIcon : gitIcon;
                showingGithub = !showingGithub;

                button.classList.add("animate-flip-second");
            }
        }, { once: true });
    });
}