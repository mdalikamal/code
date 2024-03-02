const express = require("express");
const app = express();
app.use(express.json());
const movies = [
  {
    id: 1,
    title: "Star wars",
    year: 1977,
    rating: 8.6,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
  },
  {
    id: 2,
    title: "rocky 2",
    year: 1978,
    rating: 8.6,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
  },
  {
    id: 3,
    title: "never back down",
    year: 1979,
    rating: 8.6,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
  },
];

app.get("/api/movies", (req, res) => {
  res.send(movies);
});
app.get("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((m) => m.id === parseInt(id));
  if (!movie) return res.status(404).send("no movie found by that name");
  res.send(movie);
});

app.post("/api/movies", (req, res) => {
  const movie = req.body;
  movie.id = movies.length + 1;
  movies.push(movie);
  res.send(movies);
});
app.put("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  if (!movie) return res.status(404).send("no movie found by that name");
  movie.year = req.body.year;
  movie.title = req.body.title;
  movie.rating = req.body.rating;
  movie.actors = req.body.actors;

  res.send(movies);
});
app.delete("/api/delete/movie/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  const index = movies.indexOf(movie);
  if (!movie) return res.status(404).send("no movie found by that name");
  movies.splice(index, 1);
  res.send(movies);
});

app.get("/", (req, res) => {
  res.send("hellpress");
});
app.listen("300", () => {
  console.log("express 300");
});
