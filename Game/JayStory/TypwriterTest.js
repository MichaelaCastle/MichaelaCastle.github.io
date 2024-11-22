let app = document.querySelector('.text').querySelector('p');
var Typewriter = new Typewriter(app, {
    delay: 50,
    wrapperClassName: "tw_wrapper"
});
let showLine = (s) => {
    Typewriter
        .callFunction(deleteLine)
        .pauseFor(100)
        .typeString(s)
        .start();
}
let deleteLine = () => {
    let wrapper = app.querySelector(".tw_wrapper");
    if(wrapper !== null && wrapper !== undefined){
        wrapper.innerHTML = "";
    }
}

showLine("Everyone knows about that little girl who was eaten alive by wolves ten years ago, that's why most people stay away. He ignored the warning signs. And now, there's a wolf hot on his trail.");