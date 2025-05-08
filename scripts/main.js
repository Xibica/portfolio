import {type} from './type-writer.js';
import {drop_down} from './drop-menu.js';
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
const timePause = 0;
const delay = 0;
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

//When click in the button menu
drop_down();

//When click in WhatsApp icon:
const whatsappIcon = document.getElementById('whatsappIcon');
if(whatsappIcon)
    whatsappIcon.addEventListener('click', whatsapp_action);
else 
    console.error('WhatsApp icon not found');
