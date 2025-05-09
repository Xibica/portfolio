const whatsappIcon = document.getElementById('whatsappIcon');

export function whatsapp_action(){
    const phoneNumber = '5535998368942';

    if(whatsappIcon)
        whatsappIcon.addEventListener('click', () =>{
            window.open(`https://wa.me/${phoneNumber}`, '_blank');
    });
    else 
        console.error('WhatsApp icon not found');
}