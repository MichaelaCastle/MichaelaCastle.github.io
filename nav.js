const smallDevice = window.matchMedia("(max-width: 576px)");
let defaultTheme = "noraml";
const pressedButtonSelector = '[data-theme][aria-pressed="true"]';
let versionNumber;
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

const getVersionNumber = () => {
    versionNumber = localStorage.getItem('versionNumber');
    if(!(versionNumber) || versionNumber === null || versionNumber === undefined || versionNumber === 'null' || versionNumber === 'undefined') {
        versionNumber = "1";
        localStorage.setItem('versionNumber', versionNumber);
    }
    else{
        localStorage.setItem('versionNumber', (parseInt(versionNumber) + 0.001).toString());
    }
}

const setInitialTheme = () => {
    const savedTheme = localStorage.getItem('selected-theme');
    if(savedTheme && savedTheme !== defaultTheme) {
      applyTheme(savedTheme);
    }
};

let CreateNavbar = (selected = 'Characters') =>{  
    // document.querySelector('body').innerHTML += `
    // <footer>
    //     <button data-theme="normal" aria-pressed="true" id="NormalMode"></button>
    //     <button data-theme="alt" aria-pressed="false" id="AltMode"></button>
    //     <!-- <button data-theme="custom" aria-pressed="false" id="CustMode"></button> -->
    // </footer>`;
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
            width: 50px;
            height: 50px;
            border-radius: 25px;
            /*border-style: dotted;*/
            border-style: solid;
            border-width: 0px;
            margin: 5px;
            transition: .2s ease-in-out 0s;
        }
        footer button:hover{
            cursor: pointer;
            transform: scale(1.2);
            background-color: hsl(var(--hue2), 50%, 50%);
        }
        #NormalMode{
            background-color: hsl(var(--hue), 30%, 80%);
            border-color: hsl(var(--hue), 30%, 30%);
        }
        #AltMode{
            background-color: hsl(var(--hue2), 30%, 20%);
            border-color: hsl(var(--hue2), 30%, 80%);
        }
        #CustMode{
            background-size: 200% auto;
            background-image: linear-gradient(135deg,
                hsl(000, 70%, 70%) 0%,
                hsl(036, 70%, 70%) 10%,
                hsl(072, 70%, 70%) 20%,
                hsl(108, 70%, 70%) 30%,
                hsl(114, 70%, 70%) 40%,
                hsl(150, 70%, 70%) 50%,
                hsl(186, 70%, 70%) 60%,
                hsl(222, 70%, 70%) 70%,
                hsl(260, 70%, 70%) 80%,
                hsl(296, 70%, 70%) 90%,
                hsl(332, 70%, 70%) 100%);
            border-color: hsl(var(--hue2), 30%, 30%);
            border-width: 1px;
        }
        #NormalMode:hover{
            background-color: hsl(var(--hue), 30%, 50%);
        }
        #AltMode:hover{
            background-color: hsl(var(--hue2), 30%, 50%);
        }
        #CustMode:hover{
            background-position: right center;
        }
        button[aria-pressed="true"], #CustMode[aria-pressed="true"] {
            border-style: solid;
            border-width: 3px;
        }
        /*@media (max-width: 529px) {
            footer button{
                border-width: 0px;
            }
            footer button[aria-pressed="true"] {
                border-style: solid;
                border-width: 3px;
            }
        }*/
    </style>`;
    // document.querySelector('header').innerHTML += `
    // <div class="navbar">
    //     <h3 id="SiteName">Prismoria</h3>
    //     <div class="flex-container">
    //         <a href="index.html" id="TheParticle" class="${selected === "TheParticle" ? "Selected" : ""}">The Particle</a>
    //         <div class="dropdown">
    //             <button class="dropbtn${selected === "Characters" ? " Selected" : ""}" id="Characters">Characters
    //                 <!-- <i class="fa fa-caret-down"></i> -->
    //             </button>
    //             <div class="dropdown-content">
    //                 <a href="Jay.html">Jay Star</a>
    //                 <a href="Jacob.html">Jacob Jackson</a>
    //                 <a href="Sam.html">Samuel Broteez</a>
    //                 <a href="Elliot.html">Elliot Evans</a>
    //                 <a href="Adam.html">Adam Zondervan</a>
    //                 <a href="Rene.html">Rene Tickle</a>
    //             </div>
    //         </div>
    //         <a href="SomeStories.html" id="SomeStories" class="${selected === "SomeStories" ? "Selected" : ""}">Some Stories</a>
    //         <a href="Updates.html" id="Updates" class='${selected === "Updates" ? "Selected" : ""}'>Site Updates</a>
    //     </div>
    // </div>`;
    smallDevice.addListener(handleDeviceChange);
    handleDeviceChange(smallDevice);
}