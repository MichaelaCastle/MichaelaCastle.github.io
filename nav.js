const smallDevice = window.matchMedia("(max-width: 576px)");
const defaultTheme = "noraml";
const pressedButtonSelector = '[data-theme][aria-pressed="true"]';
let handleDeviceChange = (e) => {
    if (e.matches) {
        document.querySelector('#TheParticle').innerHTML = "Home";
        document.querySelector('#SomeStories').innerHTML = "Stories";
        document.querySelector('#Updates').innerHTML = "Updates";
    }
};

const applyTheme = (theme) => {
    const target = document.querySelector(`[data-theme="${theme}"]`);
    document.documentElement.setAttribute("data-selected-theme", theme);
    document.querySelector(pressedButtonSelector).setAttribute('aria-pressed', 'false');
    target.setAttribute('aria-pressed', 'true');
};
  
const handleThemeSelection = (event) => {
    const target = event.target;
    const isPressed = target.getAttribute('aria-pressed');
    const theme = target.getAttribute('data-theme');        
    
    if(isPressed !== "true") {
      applyTheme(theme);
      localStorage.setItem('selected-theme', theme);
    }
}
  
const setInitialTheme = () => {
    const savedTheme = localStorage.getItem('selected-theme');
    if(savedTheme && savedTheme !== defaultTheme) {
      applyTheme(savedTheme);
    }
};

let CreateNavbar = (selected = 'Characters') =>{  
    document.querySelector('body').innerHTML += `
    <footer>
        <button data-theme="normal" aria-pressed="true" id="NormalMode"></button>
        <button data-theme="alt" aria-pressed="false" id="AltMode"></button>
    </footer>`;
    setInitialTheme();

    document.querySelector('footer').querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', handleThemeSelection);
    });
    document.querySelector('head').innerHTML += `
    <style>
        footer{
            position: sticky;
            bottom: 0;
            display: flex;
            justify-content: right;
        }
        footer button{
            background-color: hsl(var(--hue2), 50%, 70%);
            width: 70px;
            height: 70px;
            border-radius: 35px;
            border-style: dotted;
            border-width: 5px;
            margin: 10px;
            transition: .2s ease-in-out 0s;
        }
        footer button:hover{
            cursor: pointer;
            transform: scale(1.2);
            background-color: hsl(var(--hue2), 50%, 50%);
        }
        #NormalMode{
            background-color: hsl(var(--hue), 30%, 80%);
            border-color: hsl(var(--hue), 30%, 20%);
        }
        #AltMode{
            background-color: hsl(var(--hue2), 30%, 20%);
            border-color: hsl(var(--hue2), 30%, 80%);
        }
        #NormalMode:hover{
            background-color: hsl(var(--hue), 30%, 50%);
        }
        #AltMode:hover{
            background-color: hsl(var(--hue2), 30%, 50%);
        }
        button[aria-pressed="true"] {
            border-style: solid;
        }
        @media (max-width: 529px) {
            footer button{
                background-color: hsl(var(--hue2), 50%, 70%);
                width: 50px;
                height: 50px;
                border-radius: 25px;
                border-style: dotted;
                border-width: 3px;
                margin: 5px;
            }
        }
    </style>`;
    document.querySelector('header').innerHTML += `
    <div class="navbar">
        <h3 id="SiteName">Prismoria</h3>
        <div class="flex-container">
            <a href="index.html" id="TheParticle" class="${selected === "TheParticle" ? "Selected" : ""}">The Particle</a>
            <div class="dropdown">
                <button class="dropbtn${selected === "Characters" ? " Selected" : ""}" id="Characters">Characters
                    <!-- <i class="fa fa-caret-down"></i> -->
                </button>
                <div class="dropdown-content">
                    <a href="Jay.html">Jay Star</a>
                    <a href="Jacob.html">Jacob Jackson</a>
                    <a href="Sam.html">Samuel Broteez</a>
                    <a href="Elliot.html">Elliot Evans</a>
                    <a href="Adam.html">Adam Zondervan</a>
                    <a href="Rene.html">Rene Tickle</a>
                </div>
            </div>
            <a href="SomeStories.html" id="SomeStories" class="${selected === "SomeStories" ? "Selected" : ""}">Some Stories</a>
            <a href="Updates.html" id="Updates" class='${selected === "Updates" ? "Selected" : ""}'>Site Updates</a>
        </div>
    </div>`;
    smallDevice.addListener(handleDeviceChange);
    handleDeviceChange(smallDevice);
}