const genresBtn = document.getElementById("genre-btn");
const favBtn = document.getElementById("fav-btn");
const topRatedBtn = document.getElementById("topRated-btn");
const ulList = document.getElementById("ulList");
const olList = document.getElementById("olList");

const addGenresToDOM = async function (method, url) {
  clearDom(ulList, olList);

  const genreObjects = await sendHttpRequest(method, url);
  const genresArray = genreObjects.genres.map((object) => object.name);

  genresArray.forEach((genre) => {
    let listItem = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = genre;
    listItem.appendChild(p);

    ulList.appendChild(listItem);
  });
};

const addFavMovieToDOM = async function (method, url) {
  clearDom(ulList, olList);

  const favMovie = await sendHttpRequest(method, url);

  let listItem = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = favMovie.title;
  listItem.appendChild(p);

  let imagelink = document.createElement("a");
  imagelink.href =
    "https://www.themoviedb.org/t/p/w1280" + favMovie.poster_path;
  let image = document.createElement("img");
  image.src = "https://www.themoviedb.org/t/p/w1280" + favMovie.poster_path;
  image.alt = favMovie.title;
  image.title = favMovie.title;
  imagelink.appendChild(image);
  listItem.appendChild(imagelink);

  ulList.appendChild(listItem);
};

const addTopRatedToDOM = async function (method, url) {
  clearDom(ulList, olList);

  const topRatedObjects = await sendHttpRequest(method, url);
  const topRatedArray = topRatedObjects.results.map((object) => object.title);

  topRatedArray.slice(0, 10).forEach((movie) => {
    let listItem = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = movie;
    listItem.appendChild(p);

    olList.appendChild(listItem);
  });
};

function clearDom(ulList, olList) {
  return (ulList.innerHTML = ""), (olList.innerHTML = "");
}

genresBtn.addEventListener("click", () =>
  addGenresToDOM("GET", "https://api.themoviedb.org/3/genre/movie/list")
);

favBtn.addEventListener("click", () =>
  addFavMovieToDOM("GET", "https://api.themoviedb.org/3/movie/68718")
);

topRatedBtn.addEventListener("click", () =>
  addTopRatedToDOM("GET", "https://api.themoviedb.org/3/movie/top_rated")
);
