let CreateTemplate = (Version = 1, Name, Hue1, Hue2, MiddleHR, MiddleImageHR = "", AnswerDecor, TW, OtherTW, Img1, Quote1, Img2, Quote2, Img3, Quote3, Img4, Quote4, Img5, Quote5, Img6, Quote6, Img7, Quote7, Img8, Quote8, ExtraStyling) =>{
    document.querySelector('head').innerHTML = `
    <title>${Name}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;600;700;800&family=Spectral:wght@200;300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --hue: ${Hue1};
            --hue2: ${Hue2};
            --angle: 160deg;

            --middleHR: "${MiddleHR}";
            --middleImageHR: "${MiddleImageHR}";
            --middleLength: ${MiddleImageHR.length};
            --middleAddition: "${MiddleImageHR.length <= 8 ? "──" : ""}";

            --answerDecor: "${AnswerDecor}";
        }
        ${ExtraStyling}
    </style>
    <link rel="stylesheet" href="CSS/HeadersAndDefaults.css?v=${Version}">
    <link rel="stylesheet" href="CSS/Character.css?v=${Version}">
    <link rel="stylesheet" href="CSS/HrStyles.css?v=${Version}">
    <link rel="stylesheet" href="CSS/Nav.css?v=${Version}">`;

    document.querySelector('body').innerHTML = `
    <header></header>
    <main>
        <div class="sectionHeader" id="Name"><h1>${Name}</h1></div>
            <div class="sectionHeader"><h1>Character Sheet</h1></div>
            <div class="tw">
                <p>╭━━━━━━━━━━━━━━━━╮</p>
                <p>Trigger Warnings</p>
                <p>${TW}</p>
                ${OtherTW}
                <p>╰━━━━━━━━━━━━━━━━╯</p>
            </div>
            <div class="sectionLabel">
                <hr>
                <p><b>Contents</b></p>
                <hr>
            </div>
            <p>I. Teaser</p>
            <p>II. Basic info</p>
            <p>III. Health and Abilities</p>
            <p>IV. Appearance</p>
            <p>V. Personality</p>
            <p>VI. Self Perception</p>
            <p>VII. Relations</p>
            <p>VIII. Roleplay Info</p>
            <hr class="ImageTop">
            <img src="${Img1}">
            <p class="quoteCaption">“${Quote1}”</p>
            <hr class="ImageBottom">
            <div class="sectionLabel">
                <hr>
                <p><b>Teaser</b></p>
                <hr>
            </div>
            <p id="TeaserText"></p>
            <hr class="ImageTop">
            <img src="${Img2}">
            <p class="quoteCaption">“${Quote2}”</p>
            <hr class="ImageBottom">
            <div class="sectionLabel">
                <hr>
                <p><b>Basic Info</b></p>
                <hr>
            </div>
            <div class="info" id="BasicInfo"></div>
            <hr class="ImageTop">
            <img src="${Img3}">
            <p class="quoteCaption">“${Quote3}”</p>
            <hr class="ImageBottom">
            <div class="sectionLabel">
                <hr>
                <p><b>Health and Abilities</b></p>
                <hr>
            </div>
            <div class="info" id="Health"></div>
            <hr class="ImageTop">
            <img src="${Img4}">
            <p class="quoteCaption">“${Quote4}”</p>
            <hr class="ImageBottom">
            <div class="sectionLabel">
                <hr>
                <p><b>Appearance</b></p>
                <hr>
            </div>
            <div class="info" id="Appearance"></div>
            <hr class="ImageTop">
            <img src="${Img5}">
            <p class="quoteCaption">“${Quote5}”</p>
            <hr class="ImageBottom">
            <div class="sectionLabel">
                <hr>
                <p><b>Personality</b></p>
                <hr>
            </div>
            <div class="info" id="Personality"></div>
            <hr class="ImageTop">
            <img src="${Img6}">
            <p class="quoteCaption">“${Quote6}”</p>
            <hr class="ImageBottom">
            <div class="sectionLabel">
                <hr>
                <p><b>Self-Perception</b></p>
                <hr>
            </div>
            <div class="info" id="Perception"></div>
            <hr class="ImageTop">
            <img src="${Img7}">
            <p class="quoteCaption">“${Quote7}”</p>
            <hr class="ImageBottom">
            <div class="sectionLabel">
                <hr>
                <p><b>Relations</b></p>
                <hr>
            </div>
            <div class="info" id="Relations"></div>
            <hr class="ImageTop">
            <img src="${Img8}">
            <p class="quoteCaption">“${Quote8}”</p>
            <hr class="ImageBottom">
            <div class="sectionLabel">
                <hr>
                <p><b>Roleplay Info</b></p>
                <hr>
            </div>
        <div class="info" id="RpInfo"></div>
    </main>`;
}