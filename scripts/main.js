import {type} from './type-writer.js';
import {remake} from './responsivity.js';
import {setupSmoothScroll} from './setupScroll.js';
import {drop_down} from './drop-menu.js';
import {tradeMode} from './projects-button.js';
import {scrollDots} from './aboutMe-scroll.js';
import {whatsapp_action} from './whatsapp.js';

//calling intro
const textTerminalIntro = [
    '> Searching for professional...',
    '> Professional found: "jpModesto.Dev"...',
    '> Loading portfolio of: "jpModesto.dev"...',
    '> Connecting to creative interface...',
    '> -Hello, Modesto here — your future dev!'
    ];
const typeWriter = document.getElementById("intro-writer");
const introTerminal = document.getElementById("intro-terminal");
const content = document.getElementById("content");
const timePause = 650; //650 e 32
const delay = 32;
setTimeout(() => {
    type(textTerminalIntro, typeWriter, delay, () =>{
        content.style.display = "flex";
        introTerminal.style.opacity = "0";
        introTerminal.addEventListener("transitionend", () => {
            introTerminal.style.display = "none";
            document.body.style.overflowY = "auto";
        });
    }, timePause);
}, timePause);

//responsive treatment
remake();
window.addEventListener("resize", remake);

//setup scrolling with href
setupSmoothScroll();

//When click in the button menu
drop_down();

//When click in the button projects
tradeMode();

//scrollDots;
scrollDots();

//When click in WhatsApp icon:
whatsapp_action();

