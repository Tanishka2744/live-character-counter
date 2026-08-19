const message = document.getElementById("message");
const count = document.getElementById("count");
const remaining = document.getElementById("remaining");
const progress = document.getElementById("progress");
const percentage = document.getElementById("percentage");
const status = document.getElementById("status");
const card = document.querySelector(".counter-card");

const maxCharacters = 200;

message.addEventListener("input", () => {
    const currentLength = message.value.length;
    const charactersLeft = maxCharacters - currentLength;
    const progressValue = (currentLength / maxCharacters) * 100;

    // Update character count
    
    count.textContent = currentLength;

    // Update remaining characters

    remaining.textContent = `${charactersLeft} characters left`;

    // Update progress bar

    progress.style.width = `${progressValue}%`;

    // Update percentage

    percentage.textContent = `${Math.round(progressValue)}%`;

    // Counter animation

    count.classList.remove("count-animation");
    void count.offsetWidth;
    count.classList.add("count-animation");

    // Remove previous states

    card.classList.remove("warning");
    card.classList.remove("danger");

    // Default status

    if (currentLength === 0) {
        status.textContent = "You can start typing...";
    }

    // Normal state

    else if (currentLength < 160) {
        status.textContent = "Looking good! ✨";
    }

    // Warning state

    else if (currentLength < maxCharacters) {
        card.classList.add("warning");
        status.textContent = "You're getting close to the limit! ⚠️";
    }

    // Maximum limit

    else {
        card.classList.add("danger");
        status.textContent = "Character limit reached! 🚫";
    }
});