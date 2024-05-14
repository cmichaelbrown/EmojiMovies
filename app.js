const startButton = document.getElementById("start");
const submitGuessButton = document.getElementById("submitGuess");
const emojisDiv = document.getElementById("emojis");
const movieTitleInput = document.getElementById("movieTitle");
const responseDiv = document.getElementById("response");
const gameContent = document.getElementById("gameContent");
const instructions = document.getElementById("instructions");
const scoreSlider = document.getElementById("scoreSlider");
const correctCount = document.getElementById("correctCount");

let currentMovie = null;
let currentEmojis = [];
let currentEmojiIndex = 0;
let attempts = 0;

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    instructions.style.display = "none";
    gameContent.style.display = "block";
    newMovie();
});

submitGuessButton.addEventListener("click", () => {
    const userGuess = movieTitleInput.value.trim();
    if (userGuess.toLowerCase() === currentMovie.title.toLowerCase()) {
        responseDiv.innerHTML = 'Correct! Well done!';
        updateScore();
        setTimeout(newMovie, 2000);  // Load new movie after 2 seconds
    } else {
        attempts++;
        if (currentEmojiIndex < currentEmojis.length - 1) {
            currentEmojiIndex++;
            displayEmojis();
        } else {
            responseDiv.innerHTML = `Incorrect. The correct movie title is "${currentMovie.title}".`;
            setTimeout(newMovie, 2000);  // Load new movie after 2 seconds
        }
    }
});

function newMovie() {
    currentMovie = movies[Math.floor(Math.random() * movies.length)];
    currentEmojis = currentMovie.emojis.split(' ');
    currentEmojiIndex = 0;
    attempts = 0;
    displayEmojis();
    movieTitleInput.value = '';
    responseDiv.innerHTML = '';
}

function displayEmojis() {
    emojisDiv.innerHTML = currentEmojis.slice(0, currentEmojiIndex + 1).join(' ');
}

function updateScore() {
    let score = 5 - attempts;
    scoreSlider.value = score;
    correctCount.textContent = parseInt(correctCount.textContent) + score;
}
