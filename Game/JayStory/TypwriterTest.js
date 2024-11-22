function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
class TW{
    delay = 25;
    waitingPaste = false;
    typing = false;
    constructor(text){ this.text = text; }
    typeString = async(s) => {
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
// let typing = false;
// var Typewriter = new Typewriter(app, {
//     delay: 25,
//     wrapperClassName: "tw_wrapper",
//     cursor: ""
// });
Typewriter = new TW(app);
let showLine = (s) => {
    Typewriter.deleteLine();
    Typewriter.pauseFor(100);
    Typewriter.typeString(s);
        // .callFunction(() => {typing = false;})
        // .start();
}
// let deleteLine = () => {
//     let wrapper = app.querySelector(".tw_wrapper");
//     if(wrapper !== null && wrapper !== undefined){
//         wrapper.innerHTML = "";
//     }
// }


