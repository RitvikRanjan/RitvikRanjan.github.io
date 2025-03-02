// ... (Particles.js configuration)
// Add click event listeners to experience, club, and community items
// ...

// Typing effect for "Devotee"
const devoteeTextElement = document.getElementById('devotee-text');
const devoteeTexts = ["Devotee to Mathematics", "Devotee to Books", "Devotee to Tennis", "Devotee to Service", "Devotee to Science"];
let devoteeTextIndex = 0;
let devoteeCharIndex = 0;

function typeDevotee() {
    if (devoteeCharIndex < devoteeTexts[devoteeTextIndex].length) {
        devoteeTextElement.textContent += devoteeTexts[devoteeTextIndex].charAt(devoteeCharIndex);
        devoteeCharIndex++;
        setTimeout(typeDevotee, 50);
    } else {
        setTimeout(eraseDevotee, 1000);
    }
}

function eraseDevotee() {
    if (devoteeCharIndex > 0) {
        devoteeTextElement.textContent = devoteeTexts[devoteeTextIndex].substring(0, devoteeCharIndex - 1);
        devoteeCharIndex--;
        setTimeout(eraseDevotee, 30);
    } else {
        devoteeTextIndex = (devoteeTextIndex + 1) % devoteeTexts.length;
        setTimeout(typeDevotee, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeDevotee();
});
