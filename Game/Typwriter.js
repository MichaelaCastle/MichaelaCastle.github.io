const wait = ms => new Promise(res => setTimeout(res, ms));
class TW {
    delay = 25;
    autoPause = 1000;
    waitingPaste = false;
    typing = false;
    auto = false;
    parentScript = null;
    typeAnimation = true;
    requestString = new Event('requestString');
    constructor(text, delay, autoPause, typeAnimation){
        this.text = text;
        this.delay = delay;
        this.autoPause = autoPause;
        this.typeAnimation = typeAnimation;
    }
    typeString = async(s) => {
        if(this.typeAnimation){
            this.typing = true;
            for(let i = 0; i < s.length; i++){
                await wait(this.delay);
                if(s[i] === " "){
                    i += 1;
                    this.text.innerText += ` ${s[i]}`;
                }
                else{this.text.innerText += s[i];}
                if(this.waitingPaste) i = s.length;
            }
            this.typing = false;
            if(this.waitingPaste) this.pasteString(s);
        }
        else { this.pasteString(s); }
        if(this.auto){
            await wait(this.autoPause);
            document.dispatchEvent(this.requestString);
        }
    }
    pasteString = (s) => {
        if(this.typing && !this.waitingPaste){
            this.waitingPaste = true;
            return;
        }
        this.text.innerText = s;
        this.waitingPaste = false;
    }
    deleteLine = () => this.pasteString("");
    pauseFor = async(ms) => await wait(ms);
    changeDelay = (delay) => {this.delay = delay;}
}

let app = document.querySelector('.text').querySelector('p');
Typewriter = new TW(app,
    localStorage.getItem("textSpeed"),
    localStorage.getItem("autoPause"),
    localStorage.getItem("enableTW") == "true");
let showLine = (s) => {
    Typewriter.deleteLine();
    Typewriter.pauseFor(100);
    Typewriter.typeString(s);
}


