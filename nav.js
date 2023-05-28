const smallDevice = window.matchMedia("(max-width: 576px)");

let handleDeviceChange = (e) => {
    if (e.matches) {
        document.querySelector('#TheParticle').innerHTML = "Home";
        document.querySelector('#SomeStories').innerHTML = "Stories";
        document.querySelector('#Updates').innerHTML = "Updates";
    }
};

let CreateNavbar = (selected = 'Characters') =>{
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