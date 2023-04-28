const startButton = document.getElementById("start");
const submitGuessButton = document.getElementById("submitGuess");
const emojisDiv = document.getElementById("emojis");
const movieTitleInput = document.getElementById("movieTitle");
const responseDiv = document.getElementById("response");
const gameContent = document.getElementById("gameContent");
const instructions = document.getElementById("instructions");

let currentMovie = null;

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
    } else {
        responseDiv.innerHTML = `Incorrect. The correct movie title is "${currentMovie.title}".`;
    }
});

function newMovie() {
    currentMovie = movies[Math.floor(Math.random() * movies.length)];
    emojisDiv.innerHTML = currentMovie.emojis;
    movieTitleInput.value = '';
    responseDiv.innerHTML = '';
}
