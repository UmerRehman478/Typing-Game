const paragraphs = [
    "The wandering poet found solace in the rhythm of the waves. A painter's brush, in its quiet way, told the story of a thousand sunsets. The melody of a songbird echoed through the forest. However, a spark of inspiration is the heartbeat of creation. Whispers of the wind carry the secrets of the earth. Without the moon's gentle glow, the tides would lose their harmony. Far from ordinary, the fleeting moments of dawn unveil the world's softest hues.",
    "Historians often mistake the glow of a lantern for the light of wisdom, yet it shines more like a guiding hope. Hidden trails remind us how whispers can lead to great discoveries. Artists often mistake the blank canvas for emptiness, yet it holds infinite potential. Recent journeys aside, the traveler’s map becomes an artifact of adventure. The clasp of a diary holds stories untold. The first weathered journal is a gateway to the past.",
    "In our modern age, the first soft rain is, in its own way, a song of renewal. A robin is the herald of spring. A winding river carves stories into the land. A forgotten key unlocks memories long buried. A lighthouse is the sentinel of the coast. Few can describe the allure of a distant horizon without feeling the pull of wanderlust. The unnoticed pebble beneath the stream shapes the flow of water. A guardian’s watchful eye safeguards the future.",
    "Who can say whether the stormy sea is more restless than the adventurer’s heart? The explorer believes the compass is not just a tool but a symbol of trust. Few can name a steadfast oak that isn't a haven for countless lives. The shoreline is a meeting place for worlds. However, the bridge is a silent connection between journeys. If clarity remains elusive, few can deny the beauty of a shimmering dew drop catching the morning light.",
    "A storyteller is a lantern in the dark. As far as anyone can tell, the woven threads of fate are less predictable than the weaver. One cannot separate dreams from the echoes of ambition. The aged castle reveals itself as a monument of resilience. A road is the path of countless footsteps. Some unseen stars are thought of simply as guides. A whisper of the forest becomes a song of the wild. A soaring eagle is the vision of the mountain.",
    "A child’s laughter is a melody of joy. Before the sunrise, shadows held dominion. Petals are fleeting moments of color. An ancient scroll is the voice of an era. A wanderer of the night is drawn to the glow of a distant fire. A coin can hardly be seen as mere metal without also being a token of exchange. A clock is the heartbeat of a quiet room. Their journey was, in that moment, a step toward the unknown. The guardian of a treasure becomes a keeper of secrets.",
    "A flickering flame is a dance of the unseen. One cannot separate the stars from the tales they inspire. A library is a gateway to countless worlds. The ink could be said to resemble the voice of the author. A melody is a traveler’s solace. Pages are timeless companions. Some believe the twilight sky to be less vibrant than it truly is. A bell’s chime is a reminder of passing moments. Connections are the lifelines of memory.",
    "In distant lands, the whispering winds are thought of simply as messengers. Nowhere is it written that a shadow cannot embrace the light. Far from the mundane, few can describe the majesty of a starlit night. The mountain is a keeper of echoes. They found hope in the soft glow of fireflies. A pilgrim’s staff tells tales of countless paths. Trails marked by ancient feet remind us of enduring journeys. Few can name a fleeting moment that isn’t eternal in its memory.",
    "A ripple is a story on the surface of the water. A sculptor’s hands give life to still stone. Their silence was, in its way, a roar of defiance. This could be, or perhaps the echoes of history remain louder than imagined. A constellation is a map for dreamers. However, a boat is the wanderer’s steadfast companion. The horizon of an ocean becomes a painter’s muse. Their pursuit was, in its heart, a chase for the intangible.",
    "Writers often mistake the ink as a mere tool, yet it feels more like an extension of thought. Few can name a tattered book that isn’t a gateway to another realm. They discovered magic in the pages of an old journal. Those words are nothing less than eternal whispers. Few can name a forgotten song that doesn’t carry the soul of its creator. Though time fades memory, the echoes remain. The storyteller’s gift lies in weaving the invisible into reality.",
    "This could be, or perhaps the melody of a harp tells tales of unseen worlds. A breeze is the sky’s gentle sigh. Writers often mistake the blank page as daunting, yet it is a promise of endless beginnings. Some believe the fleeting shooting star to hold secrets unknown. We know the lines of a weathered face resemble maps of a life well-lived. Before the dawn, dreams were whispers in the dark. Their story was, in every sense, a symphony.",
    "The moment of inspiration becomes a spark of life. Lanterns are the companions of wandering minds. The fleeting autumn leaf reveals itself as a memory to those who notice. Few can describe the tranquility of a snow-covered forest. However, they found wonder in the frost’s delicate patterns. Nowhere is it clearer that the quiet moments are the loudest in meaning. Paint strokes of golden sunlight illuminate the canvas of twilight.",
    "A voyager is the dreamer of the open seas. We know that a ship’s mast holds tales of countless horizons. Their creation was, in every way, a bridge to another world. The tree is a monument to time. Far from the ordinary, they found adventure in the cracks of the familiar. A violin’s string hums the song of its maker. The petal of a rose holds both beauty and fragility. The dance of flames on a hearth speaks of home.",
    "The echoes of laughter resemble timeless joys. One cannot separate the past from the lessons it whispers. Far from the mundane, the call of the unknown becomes a siren song. A lantern is the light in endless shadows. A moment of stillness can hardly be considered empty without also being a breath of peace. The stars, in their quiet way, resemble eternal watchers. Framed differently, the forgotten path is a bridge to endless possibilities.",
    "Far from ordinary, a fleeting thought without words is truly the seed of creation. A melody without rhythm is still a journey of sound. A painting, without color, is a story told in shadows. The changing leaves reveal themselves as messengers of time’s cycle. A stream sees a stone as both an obstacle and a companion. The endless sky reminds us of the limitless realm of imagination. Recent wanderings remind us that every ending is also a beginning.",
    "The glow of twilight reveals itself as a painter’s masterpiece to those who see. This could be, or perhaps the soft rustle of leaves tells stories of unseen worlds. In recent days, some believe the fleeting comet to carry wishes. It’s an undeniable truth; the lingering scent of rain on the earth is a poet’s muse. In ancient times, the storyteller’s fire was the heartbeat of the village. The ember of a quiet evening becomes the warmth of memory.",
    "If this remains unclear, a friend is the anchor in uncharted seas. A quiet sunrise is the promise of a new journey. To be more precise, a shadow is a memory of the light. Authors often see the ink as fleeting, yet it writes permanence into the world. Though time may obscure, the storyteller’s legacy is a gift of eternity. We know the wanderer’s heart becomes a compass, pointing always to the horizon.",
    "A fleeting conversation becomes the root of understanding. The quiet hum of a forest is a hymn to the earth. If this is unclear, the stars above remind us of the vast unknown. The poet’s hand writes stories into the fabric of existence. A quiet brook carves its destiny, drop by drop. The song of the bird in the morning is a celebration of life’s fragility. The endless cycle of the moon becomes the reminder of constant renewal.",
    "These quiet footsteps are nothing less than a dance through time. This could be, or perhaps every grain of sand holds the memory of the mountain it once was. A wave of the ocean is a hand reaching for the shore. The thread of the weaver tells tales of interwoven lives. The calm of twilight is the breath between two worlds. Few can name a forgotten road that doesn’t lead to a story yet untold.",
];


const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);