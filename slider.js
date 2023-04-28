const scoreSlider = document.getElementById("scoreSlider");
const scoreSliderContainer = document.getElementById("scoreSliderContainer");
const correctCount = document.getElementById("correctCount");

let correctAnswers = 0;

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    instructions.style.display = "none";
    gameContent.style.display = "block";
    scoreSliderContainer.style.display = "block";
    newMovie();
});

submitGuessButton.addEventListener("click", () => {
    const userGuess = movieTitleInput.value.trim();
    if (userGuess.toLowerCase() === currentMovie.title.toLowerCase()) {
        responseDiv.innerHTML = 'Correct! Well done!';
        correctAnswers++;
        scoreSlider.value = correctAnswers;
        correctCount.textContent = correctAnswers;
    } else {
        responseDiv.innerHTML = `Incorrect. The correct movie title is "${currentMovie.title}".`;
    }
});
