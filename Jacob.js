window.onload = () => {
    getVersionNumber();
    let headStyles = `
    <link rel="stylesheet" href="CSS/HeadersAndDefaults.css?v=${versionNumber}">
    <link rel="stylesheet" href="CSS/Character.css?v=${versionNumber}">
    <link rel="stylesheet" href="CSS/Audioplayer.css?v=${versionNumber}">
    <link rel="stylesheet" href="CSS/HrStyles.css?v=${versionNumber}">
    <link rel="stylesheet" href="CSS/Nav.css?v=${versionNumber}">
    `;
    document.querySelector('head').innerHTML += headStyles;
    let player = document.querySelector('#player');
    player.pause();
    CreateNavbar();
    document.querySelector('#BasicInfo').innerHTML= `
    <p class="question">Birth Name</p>
    <p class="answer">Jacob Isaac Jackson</p>
    <p class="question">Current Name</p>
    <p class="answer">Jacob Isaac Jackson</p>
    <div class='brLarge'></div>
    <p class="question">First Name</p>
    <p class="answer">Jacob</p>
    <p class="question">Meaning</p>
    <p class="answer">Holder of the heel or supplanter</p>
    <div class='brLarge'></div>
    <p class="question">Middle Name</p>
    <p class="answer">Isaac</p>
    <p class="question">Meaning</p>
    <p class="answer">He will laugh, he will rejoice</p>
    <div class='brLarge'></div>
    <p class="question">Last Name</p>
    <p class="answer">Jackson</p>
    <p class="question">Meaning</p>
    <p class="answer">Son of Jack, God has been gracious</p>
    <div class='brLarge'></div>
    <p class="question">Nicknames</p>
    <p class="answer">He would love for Jake to be his nickname, but he's always around Sam who never uses nicknames, so it never caught on. But he would love nicknames, nobody has given him any</p>
    <div class='brLarge'></div>
    <p class="question">Biological Gender</p>
    <p class="answer">Male</p>
    <p class="question">Preferred Gender</p>
    <p class="answer">Agender</p>
    <p class="question">Pronouns</p>
    <p class="answer">He's fine with being referred to as anything. It does not offend him. He looks more masculine, so most refer to him with masculine pronouns, but he's fine with they/them or ever she/her. He does dress femininely sometimes, he doesn't categorize genders.</p>
    <div class='brLarge'></div>
    <p class="question">Sexual Orientation</p>
    <p class="answer">Gay</p>
    <p class="question">Romantic Orientation</p>
    <p class="answer">Gay</p>
    <div class='brLarge'></div>
    <p class="question">Age</p>
    <p class="answer">17 to 22 depending on the rp</p>
    <p class="answer">Default 22</p>
    <p class="question">Birthday</p>
    <p class="answer">July 8th</p>
    <p class="question">Zodiac Sign</p>
    <p class="answer">Cancer</p>
    <div class='brLarge'></div>
    <p class="question">Occupation</p>
    <p class="answer">Singer / Songwriter</p>
    <p class="answer">Actor</p>
    <div class='brLarge'></div>
    <p class="question">Where they live</p>
    <p class="answer">Prismoria</p>
    <div class='brLarge'></div>
    <p class="question">Languages</p>
    <p class="answer">English</p>`;
    document.querySelector('#Health').innerHTML = `
    <p class="question">Physical Illnesses</p>
    <p class="answer">Dwarfism</p>
    <p class="question">Mental Illnesses</p>
    <p class="answer">None (Maybe PTSD)-</p>
    <p class="question">Triggers</p>
    <p class="answer">SA/Depression, abandonment, Being trapped, cannibalism</p>
    <div class='brLarge'></div>
    <p class="question">Mutation / Power</p>
    <p class="answer">Time Manipulation</p>
    <p class="question">How long have they had it</p>
    <p class="answer">About 12 years</p>
    <p class="question">How do they use it (If it's a power)</p>
    <p class="answer">Teleportation, pulling pranks</p>
    <p class="question">What are the limitations (If it's a power)</p>
    <p class="answer">It takes a lot of effort and often gives him a headache. Stopping the entire universe from continuing on is pretty difficult</p>`;
    document.querySelector('#Appearance').innerHTML = `
    <p class="question">Height</p>
    <p class="answer">4'8"</p>
    <p class="answer">142.24 cm</p>
    <p class="question">Weight</p>
    <p class="answer">98 lbs.</p>
    <p class="answer">44.45 kg</p>
    <div class='brLarge'></div>
    <p class="question">Skin color</p>
    <p class="answer">Warm ivory</p>
    <div class='brLarge'></div>
    <p class="question">Hair color</p>
    <p class="answer">Caramel Brown</p>
    <p class="question">Hair style</p>
    <p class="answer">Wavy and messy</p>
    <div class='brLarge'></div>
    <p class="question">Eye color(s)</p>
    <p class="answer">Vivid blue</p>
    <p class="answer"><i>(as said in the credits, Grian is the perfect representation of him with the eye color being the only incorrect part)</i></p>
    <div class='brLarge'></div>
    <p class="question">Piercings (If any)</p>
    <p class="answer">Ear piercings</p>
    <p class="answer">He wears a dangling gold star earing on his right ear</p>
    <p class="question">Scars (If any)</p>
    <p class="answer">None</p>
    <p class="question">Tattoos (If any)</p>
    <p class="answer">None</p>
    <p class="question">Birthmark (If any)</p>
    <p class="answer">None</p>
    <p class="question">Freckles</p>
    <p class="answer">Yes</p>
    <p class="question">Where</p>
    <p class="answer">Arms and the bridge of his nose</p>
    <div class='brLarge'></div>
    <p class="question">Accent / Voice</p>
    <p class="answer">He has a very melodic and enchanting voice. He is a singer after all, he chose that career for a reason</p>`;
    document.querySelector('#RpInfo').innerHTML=`
    <p class="question">Availability</p>
    <p class="answer">Open</p>
    <p class="answer">I may have to pair him with another oc to bounce off of. I haven't done many (or any) rps with Jacob as my main.</p>
    <div class='brLarge'></div>
    <p class="question">Genres</p>
    <p class="answer">Fantasy</p>
    <p class="answer">Angst</p>
    <p class="answer">Sci-Fi</p>
    <p class="answer">Romance</p>`;
    document.querySelector('#Relations').innerHTML=`
    <p class="question">Mother</p>
    <p class="answer">Ally Kane</p>
    <p class="question">Status</p>
    <p class="answer">Deceased</p>
    <div class='brLarge'></div>
    <p class="question">Father</p>
    <p class="answer">Keven Jackson</p>
    <p class="question">Status</p>
    <p class="answer">Alive but estranged</p>
    <div class='brLarge'></div>
    <p class="question">Ex-Lover</p>
    <p class="answer"><a href="Jay.html">Jay Star</a></p>
    <p class="question">Status</p>
    <p class="answer">Alive (?) <i>He lives in an unknown state of living</i></p>
    <div class='brLarge'></div>
    <p class="question">Best Friend</p>
    <p class="answer"><a href="Sam.html">Sam Broteez</a></p>
    <p class="question">Status</p>
    <p class="answer">Alive</p>`;
    document.querySelector('#Perception').innerHTML = `
    <p class="question">How they feel about themselves</p>
    <p class="answer">Jacob is confident in his own abilities. He has no problems with his looks. This isn't to say he has no problems.</p>
    <div class='brLarge'></div>
    <p class="question">How they would describe themselves</p>
    <p class="answer">Confident, outgoing, playful, fun to be around</p>
    <div class='brLarge'></div>
    <p class="question">What they think is their best trait</p>
    <p class="answer">His loyalty</p>
    <div class='brLarge'></div>
    <p class="question">What they think is their worst trait</p>
    <p class="answer">He can be a bit much to handle. There is just a <i>lot</i> of energy pent up inside of him.</p>
    <div class='brLarge'></div>
    <p class="question">How they think other perceive them</p>
    <p class="answer">An outgoing, if not annoyingly energetic, cheerful person</p>
    <div class='brLarge'></div>
    <p class="question">What they would like to change about themselves</p>
    <p class="answer">His past</p>`;
    document.querySelector('#Personality').innerHTML = `
    <p class="question">Closest Stereotype</p>
    <p class="answer">That over-energetic guy who's always happy</p>
    <p class="question">Overall Description</p>
    <p class="answer">Jacob is a ‘lil ball of sunshine, always trying to cheer people up. If you are sad, he won’t try to fix the problem, because not everything needs to be fixed, he’ll just offer you the comfort and attention you need. This is a pure and wholesome boi who will do anything for his friends. However, Jacob is a force of nature, he cannot be stopped. He is very mischievous and always pulling pranks to get a reaction.</p>
    <p class='answer'>Jacob is strangely good at reading others. He can look at someone and recite, down to a percentage, what they are feeling. But, he isn't doing this all the time. It's a result of something that happened with <a href="Sam.html"><u>Sam</u></a>, something he vowed to never let happen again.</p>
    <div class='brLarge'></div>
    <p class="question">Likes</p>
    <p class="answer">Making people smile and joking around</p>
    <p class="answer">Music and performing. His father used to play guitar with him, his father was his role model. Until said father ditched after being told that his son was gay. But, Jacob still loves music none-the-less.</p>
    <p class="answer">Teasing people</p>
    <div class='brLarge'></div>
    <p class="question">Dislikes</p>
    <p class="answer">People who are too serious or try to mask their feelings</p>
    <p class="answer">Being alone, he always wanted to be with someone else</p>
    <p class="answer">Silence</p>
    <div class='brLarge'></div>
    <p class="question">Positive Traits</p>
    <p class="answer">Charming and playful. He is basically a force of nature. If he wants something, he can and will get it because he just knows how to play people. Often, all he really wants is to have fun and make others happy though.</p>
    <p class="answer">Loyal. He will never leave a friend. If a friendship falls apart, it's because the other person left, not the other way around.</p>
    <p class="answer">Musically talented</p>
    <div class='brLarge'></div>
    <p class="question">Negative Traits</p>
    <p class="answer">He is very annoying. He never runs out of things to say or do, and he never runs out of energy. It is impossible to keep up with him.</p>
    <p class="answer">Overly-trusting</p>
    <p class="answer">Easily distracted</p>
    <div class='brLarge'></div>
    <p class="question">Fears</p>
    <p class="answer">Losing those he cares about. That's why he's so good at reading feelings, he learned how to do that because he was worried about his friend with depression who was amazing at hiding his pain. He needed to be able to tell when that friend needed help. He can't bear the thought of losing someone close like that again</p>
    <p class="answer">Losing touch with who he is. Changing so much that he doesn't recognize the person staring back at him in the mirror</p>
    <p class="answer">Losing hope. As long as he has even a little bit of hope, he can go on, but if he doesn't have any more hope, there really is no point in living</p>
    <div class='brLarge'></div>
    <p class="question">Hobbies</p>
    <p class="answer">Singing - His father was a singer, and he always looked up to his father as a kid. He used to watch all his shows and concerts on this old, box tv.</p>
    <p class="answer">Playing the guitar - His father taught him how to play guitar. They would sometimes play together</p>
    <p class="answer">Acting - Musicals were some of the first places he was able to sing or perform in front of a crowd. He also managed to drag <a href="Jay.html"><u>Jay</u></a> into musicals and plays.</p>
    <div class='brLarge'></div>
    <p class="question">Love Language(s)</p>
    <p class="answer">Quality Time: This love language is all about giving your undivided attention to that one special person, without the distraction of television, phone screens, or any other outside interference. They have a strong desire to actively spend time with their significant other, having meaningful conversations or sharing recreational activities.</p>
    <p class="answer">Physical Touch: People who communicate their appreciation through this language, when they consent to it, feel appreciated when they are hugged, kissed, or cuddled. They value the feeling of warmth and comfort that comes with physical touch.</p>
    <div class='brLarge'></div>
    <p class="question">Extra</p>
    <p class="answer">He will do anything to make someone smile if he finds them interesting or could use some cheering up. He doesn't give up easily. The guy spent 3 full years trying to get one guy to just say one word to him, then another 3 years trying to help him heal from past trauma and be happier in general. He is determined.</p>`;
};