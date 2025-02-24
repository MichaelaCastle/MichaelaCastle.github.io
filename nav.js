const smallDevice = window.matchMedia("(max-width: 576px)");
let defaultTheme = "alt";
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
    setInitialTheme();

    document.querySelector('footer').querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', handleThemeSelection);
    });
    // smallDevice.addListener(handleDeviceChange);
    handleDeviceChange(smallDevice);
}