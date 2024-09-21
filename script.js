function acceptBoyfriend() {
    // Array of sweet messages
    const sweetMessages = [
        "You're my one and only.",
        "My life is complete with you by my side.",
        "Every moment with you is a dream come true.",
        "You light up my world like nobody else.",
        "I promise to always make you smile."
    ];

    // Select a random sweet message
    const randomSweetMessage = sweetMessages[Math.floor(Math.random() * sweetMessages.length)];

    // Display the sweet message
    document.getElementById('response').innerText = randomSweetMessage;
}

function rejectBoyfriend() {
    // Display a response for rejecting
    document.getElementById('response').innerText = "Oh no! Maybe next time. I'll be here waiting.";
}
