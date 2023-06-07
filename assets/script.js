const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAdd = document.querySelector(".btn--passive");
const confirmAdd = document.querySelector(".btn--success");
const msgError = document.querySelector(".modal__msg p");
const inputs = document.querySelectorAll(".modal__content input");
const movie_lists = document.getElementById('movie-list');
const entry = document.getElementById("entry-text");
const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entry.style.display = "block";
  } else {
    entry.style.display = "none";
  }
};

const deleteMovieHandler = () => {
  
}

const renderNewMovieElement = (title, imageUrl, rating) => {
  const li = document.createElement("li");
  li.className = "movie-element";
  li.innerHTML = `
    <div class='movie-element__image'>
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class='movie-element__info'>
      <h2>${title}</h2>
      <p>${rating} / 5 stars</p>
    </div>
  `;
  li.addEventListener('click', deleteMovieHandler)
  movie_lists.append(li);
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const clearInputs = () => {
  for (const input of inputs) {
    input.value = "";
  }
};

const addMovie = () => {
  const title = inputs[0].value;
  const image_url = inputs[1].value;
  const rating = inputs[2].value;

  msgError.textContent = "";
  if (
    title.trim() === "" ||
    image_url.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    msgError.textContent = "Please enter valid values (rating between 1 and 5)";
  }

  const newMovie = {
    title,
    image_url,
    rating,
  };

  movies.push(newMovie);
  toggleMovieModal();
  clearInputs();
  renderNewMovieElement(title, image_url, rating);
  updateUI();
};

const cancelMovie = () => {};

startAddMovieBtn.addEventListener("click", toggleMovieModal);
cancelAdd.addEventListener("click", toggleMovieModal);
confirmAdd.addEventListener("click", addMovie);
