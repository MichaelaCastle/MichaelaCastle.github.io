/*
Types:
    0 - No text-box, center blacks out screen & bottom does a fade-out
    1 - Text box
    2 - Chapter header
*/

let text = [
    {
        id: 0,
        type: 1,
        content: "\"What's that one?\"",
        speaker: "Narrator",
        background: "url('images/Backgrounds/RiverLookingAtSky.avif')"
    },
    {
        id: 1,
        type: 0,
        content: "\"That's the north star.\nWhenever you feel lost during the night or a storm,\nyou can always trust it to take you home.\""
    },
    {
        id: 2,
        type: 2,
        content: "Chapter One",
        hr: " ✦ • • ✦ • • ☀ • • ✦ • • ✦ "
    },
    {
        id: 3,
        type: 0,
        content: "He shines as brightly as the star above."
    },
    {
        id: 4,
        type: 0,
        content: "Trees flew by in a blur. River was running away from a wild wolf in the forest. It had already gotten a bite out of his calf; he was pushing through the pain.",
        background: "url('images/BlurredForest.jpg')"
    }
];