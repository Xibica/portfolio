let line = 0;
let char = 0;

export function type(text, docContent, typingDelay = 40, finished = null, linePause = 500){
    if(line < text.length){
        if(char < text[line].length){
            docContent.innerHTML = docContent.innerHTML.replace('<span class="cursor">|</span>', '') + text[line][char++] + '<span class="cursor">|</span>';
            setTimeout(() => type(text, docContent, typingDelay, finished, linePause), typingDelay);
        }
        else{
            setTimeout(() => {
                if(line+1 < text.length)
                    docContent.innerHTML = docContent.innerHTML.replace('<span class="cursor">|</span>', '') + '\n' + '<span class="cursor">|</span>';
                line++;
                char = 0;
                type(text, docContent, typingDelay, finished, linePause);
            }, linePause);
        }
    }
    else {
        if(finished)
            finished();
    }
}

