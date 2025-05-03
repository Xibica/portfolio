let line = 0;
let char = 0;

export function type(text, docContent, typingDelay = 75, finished = null){
    if(line < text.length){
        if(char < text[line].length){
            docContent.textContent += text[line][char++];
            setTimeout(() => type(text, docContent, typingDelay, finished), typingDelay);
        }
        else{
            docContent.textContent += '\n';
            line++;
            char = 0;
            setTimeout(() => type(text,docContent, typingDelay, finished), typingDelay);
        }
    }
    else if(finished){
        finished();
    }
}

