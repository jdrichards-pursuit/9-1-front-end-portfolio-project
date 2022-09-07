const url =
  "https://api.giphy.com/v1/gifs/search?api_key=CktPsHWKWW6EI7EZbKv1s6KgdPGLuLi7&q=cats&limit=25&offset=0&rating=g&lang=en";

fetch(url)
  .then((res) => res.json())
  .then((resJson) => console.log(resJson))
  .catch((err) => console.log(err));
