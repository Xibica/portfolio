import {type} from './type-writer.js';
import {whatsapp_action} from './whatsapp.js';

//calling intro
const textTerminalIntro = [
    '> Searching for professional...',
    '> Professional found: "jpModesto.Dev"...',
    '> Loading portfolio of: "jpModesto.dev"...',
    '> Connecting to creative interface...',
    '> - Hello, Modesto here — your future dev!'
    ];
const typeWriter = document.getElementById("intro-writer");
const delay = 1;
const introTerminal = document.getElementById("intro-terminal");
setTimeout(() => {
    type(textTerminalIntro, typeWriter, delay, () =>{
        introTerminal.style.opacity = "0";
        introTerminal.addEventListener("transitionend", () => {
            introTerminal.style.display = "none";
            document.body.style.overflowY = "auto";
        });
    }, 1);
}, 700);

//When click in WhatsApp icon:
const whatsappIcon = document.getElementById('whatsappIcon');
if(whatsappIcon)
    whatsappIcon.addEventListener('click', whatsapp_action);
else 
    console.error('WhatsApp icon not found');
