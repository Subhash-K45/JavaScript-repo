const { notStrictEqual } = require("assert");
const express =require("express");
const router = express.Router();
const {
    PostMovies,
    GetAllMovies,
    GetSingleMovie,
    GetPaginatedMovies} =require("./Movies");

router.post("/PostMovies",PostMovies);
router.get("/GetAllMovies",GetAllMovies);
router.get("/GetSingleMovies/:id",GetSingleMovie);
router.get("/Paginated",GetPaginatedMovies);

module.exports = router