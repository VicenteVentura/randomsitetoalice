
const startButton = document.getElementById("start-button");
const title = document.getElementById("title");
const message = document.getElementById("message");
const answers = document.getElementById("answers");

const yesButton = document.getElementById("yes-button");
const unsureButton = document.getElementById("unsure-button");

let finalQuestion = false;

startButton.addEventListener("click", function() {
    title.textContent = "First question...";
    message.textContent = "Are you enjoying this hangout?";

    startButton.style.display = "none";
    answers.style.display = "flex";
});

yesButton.addEventListener("click", function() {
    if (finalQuestion) {
        title.textContent = "Yayy i love youu<3 :)";
        message.textContent = "I can't wait to see where this goes!";
        answers.style.display = "none";
        return;
    }

    document.body.style.backgroundColor = "black";
    const images = document.querySelectorAll(".decoration");

images.forEach(function(image) {
    image.style.display = "none";
});

    title.textContent = "";
    message.textContent = "There's something I've wanted to ask you for a long time...";

    answers.style.display = "none";

    setTimeout(function() {
        title.textContent = "Will you be my girlfriend?";
        message.textContent = "";

        yesButton.textContent = "Yes!";
        unsureButton.textContent = "No";

        finalQuestion = true;
        answers.style.display = "flex";
    }, 3500);
});

unsureButton.addEventListener("click", function() {
    if (finalQuestion) {
        title.textContent = "That's okay :)";
        message.textContent = "Thank you for being honest with me.";
        answers.style.display = "none";
        return;
    }

    title.textContent = "Oh, that's okay!";
    message.textContent = "I hope you're still having a nice time.";
    answers.style.display = "none";
});
