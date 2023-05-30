window.onload = () => {
    getVersionNumber();
    let headStyles = `
    <link rel="stylesheet" href="CSS/HeadersAndDefaults.css?v=${versionNumber}">
    <link rel="stylesheet" href="CSS/Character.css?v=${versionNumber}">
    <link rel="stylesheet" href="CSS/Audioplayer.css?v=${versionNumber}">
    <link rel="stylesheet" href="CSS/CollapsibleGroup.css?v=${versionNumber}">
    <link rel="stylesheet" href="CSS/HrStyles.css?v=${versionNumber}">
    <link rel="stylesheet" href="CSS/Nav.css?v=${versionNumber}">
    `;
    document.querySelector('head').innerHTML += headStyles;
    let player = document.querySelector('#player');
    player.pause();
    CreateNavbar();
    //CreateHrStyle();
    document.querySelector('#BasicInfo').innerHTML= `<p class='question'>Birth Name</p>
    <p class='answer'>Samuel Amos Broteez</p>
    <p class='question'>Current Name</p>
    <p class='answer'>Samuel Amos Broteez</p>
    <div class="brLarge"></div>
    <p class='question'>First Name</p>
    <p class='answer'>Samuel</p>
    <p class='question'>Meaning</p>
    <p class='answer'>"Name of God" or "Heard of God" ("God has Heard")</p>
    <p class='question'>Significance</p>
    <p class='answer'>He thinks he has heard God. He believes that when he died for 3 minutes and 7 seconds, he saw God and heard him. He's been religious ever since</p>
    <div class="brLarge"></div>
    <p class='question'>Middle Name</p>
    <p class='answer'>Amos</p>
    <p class='question'>Meaning</p>
    <p class='answer'>"Burden" or "One who bears the burden"</p>
    <p class='question'>Significance</p>
    <p class='answer'>He's been burdened with raising his little brother and consoling everyone around him while struggling to maintain a stable job because he has a reputation of a murderer even though he did nothing wrong. But as long as he can get Simon to live until he can go to college, then it will have been worth it. Because then at least Simon got to live to his potential</p>
    <div class="brLarge"></div>
    <p class='question'>Last Name</p>
    <p class='answer'>Broteez</p>
    <div class="brLarge"></div>
    <p class='question'>Nicknames</p>
    <p class='answer'>Sam</p>
    <p><i>Reason</i></p>
    <p><i>Shortened version of Samuel. This is what he's most commonly called</i></p>
    <p class='answer'>Sammy</p>
    <p><i>Reason</i></p>
    <p><i>Another version of Samuel, but he hates being called this. He thinks it sounds too childish</i></p>
    <p class='answer'>Samikins (Sam-i-kins)</p>
    <p><i>Reason</i></p>
    <p><i>His best friend thought it was a cute nickname. Sam does not like it</i></p>
    <p class='answer'>Biscuit</p>
    <p><i>Reason</i></p>
    <p><i>Because he's sweet uwu</i></p>
    <div class="brLarge"></div>
    <p class='question'>Biological Gender</p>
    <p class='answer'>Male</p>
    <p class='question'>Preferred Gender</p>
    <p class='answer'>Male</p>
    <p class='question'>Pronouns</p>
    <p class='answer'>He / him / his</p>
    <div class="brLarge"></div>
    <p class='question'>Sexual Orientation</p>
    <p class='answer'>Asexual</p>
    <p class='question'>Romantic Orientation</p>
    <p class='answer'>Demiromantic</p>
    <div class="brLarge"></div>
    <p class='question'>Age</p>
    <p class='answer'>20</p>
    <p class='question'>Birthday</p>
    <p class='answer'>January 3rd</p>
    <p class='question'>Zodiac Sign</p>
    <p class='answer'>Capricorn</p>
    <div class="brLarge"></div>
    <p class='question'>Occupation</p>
    <p class='answer'>Official: He has this job that requires him to fill out paperwork to turn back in and get paid for. He doesn't question why his employer needs this, he just does it</p>
    <p class='answer'>Unofficial: He acts as a medical profession / doctor for those who can't afford the hospital</p>
    <div class="brLarge"></div>
    <p class='question'>Where they live</p>
    <p class='answer'>Prismoria</p>
    <div class="brLarge"></div>
    <p class='question'>Languages</p>
    <p class='answer'>English</p>
    <p class='answer'>Spanih</p>
    <p class='answer'>French</p>
    <p class='answer'>Dutch</p>
    <p class='answer'>A bit of German</p>`;
    document.querySelector('#Health').innerHTML = `<p class='question'>Physical Illnesses</p>
    <p class='answer'>None</p>
    <p class='question'>Mental Illnesses</p>
    <p class='answer'>Depression</p>
    <div class="brLarge"></div>
    <p class='question'>Triggers</p>
    <p class='answer'>Wolves</p>
    <p class='question'>Addictions</p>
    <p class='answer'>Anti-depressants</p>
    <div class="brLarge"></div>
    <p class='question'>Mutation / Power</p>
    <p class='answer'>Water Manipulation</p>
    <p class='question'>How long have they had it</p>
    <p class='answer'>Since he was around 12</p>
    <p class='question'>What are the limitations</p>
    <p class='answer'>In order to use his power, whatever he's trying to do must contain H2O</p>`;
    document.querySelector('#Appearance').innerHTML = `<p class='question'>Height</p>
    <p class='answer'>5'5"</p>
    <p class='answer'>165.1 cm</p>
    <p class='question'>Weight</p>
    <p class='answer'>118 lbs.</p>
    <p class='answer'>53.5239 kg</p>
    <div class="brLarge"></div>
    <p class='question'>Skin color</p>
    <p class='answer'>Pale ivory</p>
    <div class="brLarge"></div>
    <p class='question'>Hair color</p>
    <p class='answer'>Dirty blonde</p>
    <p class='question'>Hair style</p>
    <p class='answer'>Curly / Wavy, but he always straightens it And he has a fringe</p>
    <div class="brLarge"></div>
    <p class='question'>Eye color(s)</p>
    <p class='answer'>Bright green (Which he refers to as poison green)</p>
    <div class="brLarge"></div>
    <p class='question'>Wings (Optional)</p>
    <p class='question'>Type</p>
    <p class='answer'>Angel wings</p>
    <p class='question'>Color</p>
    <p class='answer'>White</p>
    <p class='question'>Size</p>
    <p class='answer'>12'6" per wing, 25' total wingspan</p>
    <p class='answer'>3.81 meter per wing, 7.62 meter total wingspan</p>
    <p class='question'>Feel</p>
    <p class='answer'>Very, very, very soft. Heavenly soft. Like nothing you've ever felt before</p>
    <div class="brLarge"></div>
    <p class='question'>Piercings</p>
    <p class='answer'>None</p>
    <p class='question'>Scars</p>
    <p class='answer'>A slash going across his eye, which he covers up with makeup</p>
    <p class='question'>Tattoos</p>
    <p class='answer'>None</p>
    <p class='question'>Birthmark</p>
    <p class='answer'>None</p>
    <p class='question'>Freckles</p>
    <p class='answer'>No</p>
    <div class="brLarge"></div>
    <p class='question'>Glasses / Contacts</p>
    <p class='answer'>He has glasses, but he never wears them. He'd rather be partly blind.</p>
    <div class="brLarge"></div>
    <p class='question'>Accent / Voice</p>
    <p class='answer'>Very soft and relaxing voice, it's easy to trust him and his gentle ways</p>
    <p class='answer'>By default, his laugh is really quiet or even silent. If he gets better mentally, then it can change and it just has an adorable sound</p>`;
    document.querySelector('#RpInfo').innerHTML=`<p class='question'>Availability</p>
    <p class='answer'>Open</p>
    <div class='brLarge'></div>
    <p class='question'>Genres</p>
    <p class='answer'>Fantasy</p>
    <p class='answer'>Angst</p>
    <p class='answer'>Sci-Fi</p>
    <p class='answer'>Romance</p>
    <p class='answer'>Mystery?</p>
    <p class='answer'>Adventure</p>`;
    document.querySelector('#Relations').innerHTML=`<p class='question'>Biological Mother</p>
    <p class='answer'>xxx</p>
    <p class='question'>Status</p>
    <p class='answer'>Deceased</p>
    <div class='brLarge'></div>
    <p class='question'>Biological Father</p>
    <p class='answer'>xxx</p>
    <p class='question'>Status</p>
    <p class='answer'>Deceased</p>
    <div class='brLarge'></div>
    <p class='question'>Sister</p>
    <p class='answer'>Lindsey</p>
    <p class='question'>Status</p>
    <p class='answer'>Deceased</p>
    <div class='brLarge'></div>
    <p class='question'>Brother</p>
    <p class='answer'>Simon</p>
    <p class='question'>Status</p>
    <p class='answer'>Dead</p>
    <div class='brLarge'></div>
    <p class='question'>Friends</p>
    <p class='question'><i>Best friend</i></p>
    <p class='answer'><a href='Jacob.html'>Jacob Jackson</a></p>
    <p class='question'><i>Friend</i></p>
    <p class='answer'><a href='Adam.html'>Adam Zondervan</a></p>
    <p class='question'><i>Friend</i></p>
    <p class='answer'><a href='Jay.html'>Jay Star</a></p>`;
    document.querySelector('#Perception').innerHTML = `
    <p class='question'>How they feel about themselves</p>
    <p class='answer'>He does not like himself. He believes his only purpose in life is to raise his little brother, nothing else. He doesn't care if his brother treats him terribly, he deserves it.</p>
    <div class='brLarge'></div>
    <p class='question'>How they would describe themselves</p>
    <p class='answer'>Someone who tries and often fails to be nice. Someone who can't even fulfill their only purpose in life. Someone who doesn't deserve to be happy. Someone who can't be fixed.</p>
    <div class='brLarge'></div>
    <p class='question'>What they think is their best trait</p>
    <p class='answer'>His intelligence</p>
    <div class='brLarge'></div>
    <p class='question'>What they think is their worst trait</p>
    <p class='answer'>Everything mostly. But if he had to pick his worst trait, it would probably be his cowardice</p>
    <div class='brLarge'></div>
    <p class='question'>How they think other perceive them</p>
    <p class='answer'>Monster</p>
    <div class='brLarge'></div>
    <p class='question'>What they would like to change about themselves</p>
    <p class='answer'>Everything</p>`;

    document.querySelector('#Personality').innerHTML = `
    <p class='question'>Closest Stereotype</p>
    <p class='answer'>Nerd</p>
    <div class='brLarge'></div>
    <p class='question'>Overall Description</p>
    <p class='answer'>Sam is the nicest person you will ever meet. He is always willing to lend a hand and will always try to see the good in people. He will repeatedly give people another chance to redeem themselves, no matter how bad what they did before was. This does not apply to himself however. If he thinks that he did something bad, he will not forgive himself for it. It will seem like a much bigger mistake than it really was to him, in his mind it's blown way out of proportion. He needs someone to keep him grounded and remind him that things aren't as big as they seem (though he also finds it difficult to accept help from others). And if he can't handle his own thoughts, he will resort to drugs to block out the pain and get himself back together.</p>
    <p class='answer'>Despite sometimes not being able to grasp how important his actions are, he is very smart. He's a nerd, and he's proud of it. Sometimes, this can be really cute. If the right topic happens to be brought up, he will start fangirling over some biology thing or about a book he read fifteen times over. He doesn't notice that he's doing it, and he looks like a little kid when he does. Once he realizes, he will shut up and feel embarrassed about it.</p>
    <div class='brLarge'></div>
    <p class='question'>Likes</p>
    <p class='answer'>Pastries. He really likes sweets. Not much more to say about it.</p>
    <p class='answer'>Biology and medicine. Every since he was ten, he wanted to be a doctor. He had a near death experience, the doctors who saved him were like angels to him and he wanted to be just like them. Medicine became his passion</p>
    <p class='answer'>Puppies. He's always wanted to get a puppy but has always been too worried about whether or not he'd be able to take care of it. He doesn't know if he'd be able to keep buying it food and whatnot for it to survive. But he does love puppies.</p>
    <div class='brLarge'></div>
    <p class='question'>Dislikes</p>
    <p class='answer'>Anything that he considers to be childish. He had to start going to work and support a family by himself when he was 10. He stopped being a kid. But employers don't want to be paying a ten year old, that would just be stupid. Because of his age, it was very hard to make enough money to even be able to buy food. He hates being viewed as young or child-like because of this</p>
    <p class='answer'>Similar to the last one, he hates when people assume things based on ones appearance. He didn't look like a skilled intellect or anything when he was 10, he was 10 for Christ's sake. Nobody wanted to hire a stupid little kid. But when he started to make himself look older and more mature than he was, he started getting better results. But why should he have to change his outfit just to be hired? That in itself is stupid. He will never, well, he always tries not to judge someone based off of their looks, he tries his best to ignore any prejudice biases due to how someone appears on the outside. Someone also once said something that really stuck with him: "I care more about someone's personality. People aren't always going to look as good as they used to. We all get old. But if you find someone who has a golden heart, that's not going to change, and you'll still be happy living with them."</p>
    <p class='answer'>Competition or someone challenging his intellect. He can be pretty jealous sometimes, and he is a sore loser.</p>
    <div class='brLarge'></div>
    <p class='question'>Positive Traits</p>
    <p class='answer'>Kind and caring, he will try to help anyone he can. He's very compassionate</p>
    <p class='answer'>Smart and analytical, he can understand a persons motives and perspective pretty easily</p>
    <p class='answer'>Pure and innocent</p>
    <p class='answer'>Good listener. He won't push for information you're not comfortable telling, but if you need to get something off your chest, he will sit and listen. And if you need comforting, he will offer himself up to a hug if needed</p>
    <div class='brLarge'></div>
    <p class='question'>Negative Traits</p>
    <p class='answer'>Doesn't stand up for himself and lets himself get torn down</p>
    <p class='answer'>Self-destructive as well as overly self-sacrificing is not a good combination. He will do anything to help others, he will go ahead and take the repercussions for them without thinking about how it will affect himself</p>
    <p class='answer'>He can act quite childishly when he's frustrated and may throw things at you</p>
    <p class='answer'>He has a hard time asking others for help, even when he desperately needs it. And he makes himself look like he has everything together, even if he's really falling apart</p>
    <div class='brLarge'></div>
    <p class='question'>Hobbies</p>
    <p class='answer'>Medicine</p>
    <p class='answer'>Chess</p>
    <div class='brLarge'></div>
    <p class='question'>Fears</p>
    <p class='answer'>Being picked up. Odd, I know, but he has been the victim of bulling in the past. They did some really mean things to him, and if someone tries to pick him up without warning him ahead of time, he will freak out. No matter who they are</p>
    <p class='answer'>Wolves. He is deathly afraid of wolves</p>
    <p class='answer'>Losing his brother / His brother committing suicide just like he did, except Simon won't get a second chance like him</p>
    <p><i>(In all further rps, Simon will be dead. He's very toxic, and I don't want to rp him)</i></p>
    <p class='answer'>The dark, he's scared of the dark and need a nightlight in order to sleep.</p>
    <div class='brLarge'></div>
    <p class='question'>Love Language(s)</p>
    <p class='answer'>Words of Affirmation: You really like hearing your partner say, "I love you." Those three words are particularly meaningful, special, and reassuring for you to hear. Again and again and again. You appreciate when you are being acknowledged and praised. It's nice to have your efforts recognized with kind words, no matter how small it is. It lets you know that you are valued.</p>
    <p class='answer'>Physical Touch: People who communicate their appreciation through this language, when they consent to it, feel appreciated when they are hugged, kissed, or cuddled. They value the feeling of warmth and comfort that comes with physical touch.</p>
    <div class='brLarge'></div>
    <p class='question'>Greatest joy in life</p>
    <p class='answer'>Helping others</p>
    <div class='brLarge'></div>
    <p class='question'>Biggest Regret</p>
    <p class='answer'>Holding his little brother back when his sister was in danger</p>
    <div class='brLarge'></div>
    <p class='question'>Biggest Accomplishment</p>
    <p class='answer'>Being Jacob's friend</p>
    <div class='brLarge'></div>
    <p class='question'>Darkest Secret</p>
    <p class='answer'>His sister's dead body is still in the woods, not buried, and he can never find the courage to bury her</p>
    <div class='brLarge'></div>
    <p class='question'>Extra</p>
    <p class='answer'>This is gonna sound weird, but when he falls into deep sleep, so like an hour or 2 after falling asleep, he does talk in his sleep. And not just any random nonsense, no no no no no. He fricken recites facts in his sleep. Very quietly, but if you stay up past him, you might just hear random knowledge. That is how nerd he is.</p>
    <p class='answer'>He can actually be quite evil at times.</p>`;

};