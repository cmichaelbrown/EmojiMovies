const movies = [
    {title: "The Lion King", emojis: "🦁👑🌍🐗🦓🐒🐘🌅🎶"},
    {title: "Forrest Gump", emojis: "🏫🎒🏃‍♂️🎓👟🏈🚌👩🍤🚁🏥🇻🇳"},
    {title: "The Hunger Games", emojis: "🏹👧🔥🍞🌲🏞️🏟️🤝📺💥🏆"},
    // Add more movies and emojis here
];

const newMovieButton = document.getElementById("newMovie");
const submitGuessButton = document.getElementById("submitGuess");
const emojisDiv = document.getElementById("emojis");
const movieTitleInput = document.getElementById("movieTitle");
const responseDiv = document.getElementById("response");

let currentMovie = null;

newMovieButton.addEventListener("click", () => {
    currentMovie = movies[Math.floor(Math.random() * movies.length)];
    emojisDiv.innerHTML = currentMovie.emojis;
    movieTitleInput.value = '';
    responseDiv.innerHTML = '';
});

submitGuessButton.addEventListener("click", () => {
    const userGuess = movieTitleInput.value.trim();
    if (userGuess.toLowerCase() === currentMovie.title.toLowerCase()) {
        responseDiv.innerHTML = 'Correct! Well done!';
    } else {
        responseDiv.innerHTML = `Incorrect. The correct movie title is "${currentMovie.title}".`;
    }
});
