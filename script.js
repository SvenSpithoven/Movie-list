const genresBtn = document.getElementById("genre-btn");
const favBtn = document.getElementById("fav-btn");
const topRatedBtn = document.getElementById("topRated-btn");
const ulList = document.getElementById("ulList");
const olList = document.getElementById("olList");

const addGenresToDOM = async function (method, url) {
  ulList.innerHTML = "";
  olList.innerHTML = "";

  const request = await sendHttpRequest(method, url);
  const genresArray = request.genres.map((object) => object.name);

  genresArray.forEach((genre) => {
    let listItem = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = genre;
    listItem.appendChild(p);

    ulList.appendChild(listItem);
  });
};

const addFavMovieToDOM = async function (method, url) {
  ulList.innerHTML = "";
  olList.innerHTML = "";

  const request = await sendHttpRequest(method, url);

  let listItem = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = request.title;
  listItem.appendChild(p);

  let imagelink = document.createElement("a");
  imagelink.href = "https://www.themoviedb.org/t/p/w1280" + request.poster_path;
  let image = document.createElement("img");
  image.src = "https://www.themoviedb.org/t/p/w1280" + request.poster_path;
  image.alt = request.title;
  image.title = request.title;
  imagelink.appendChild(image);
  listItem.appendChild(imagelink);

  ulList.appendChild(listItem);
};

const addTopRatedToDOM = async function (method, url) {
  ulList.innerHTML = "";
  olList.innerHTML = "";

  const request = await sendHttpRequest(method, url);
  const topRatedArray = request.results.map((object) => object.title);

  topRatedArray.slice(0, 10).forEach((movie) => {
    let listItem = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = movie;
    listItem.appendChild(p);

    olList.appendChild(listItem);
  });
};

genresBtn.addEventListener("click", () =>
  addGenresToDOM("GET", "https://api.themoviedb.org/3/genre/movie/list")
);

favBtn.addEventListener("click", () =>
  addFavMovieToDOM("GET", "https://api.themoviedb.org/3/movie/68718")
);

topRatedBtn.addEventListener("click", () =>
  addTopRatedToDOM("GET", "https://api.themoviedb.org/3/movie/top_rated")
);
