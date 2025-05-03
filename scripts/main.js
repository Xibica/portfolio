import {type} from './type-writer.js';
import {whatsapp_action} from './whatsapp.js';

    //calling intro
    const textTerminalIntro = [
        '>Searching for professional...',
        '>Professional found: "jpModesto.Dev"...',
        '>Loading port folio of: "jpModesto.dev"...',
        '>Connecting to creative interface...',
        '>Hello, Modesto here — your future dev!'
        ];
    const typeWriter = document.getElementById("intro-writer");
    const delay = 50;

    type(textTerminalIntro, typeWriter, delay, () =>{
        const intro = document.getElementById("intro-terminal");
        intro.style.display = "none";

        const content = document.getElementById("content");
        content.style.display = "block";
    });

    //Wheen click in WhatsApp icon:
    const whatsappIcon = document.getElementById('whatsappIcon');
    if(whatsappIcon)
        whatsappIcon.addEventListener('click', whatsapp_action);
    else 
        console.error('WhatsApp icon not found');
