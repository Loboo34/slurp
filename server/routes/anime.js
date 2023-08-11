const express = require("express");

const router = express.Router();
const {
  addAnime,
  getALLAnime,
  getAnime,
  deleteAnime,
  updateAnime,
} = require("../controllers/controllers");
//Get All Anime
// router.get("/", (req, res) => { 
//   res.json({ mssg: "Get all anime" });
// });
router.get('/', getALLAnime)

//Get single Anime
// router.get("/:id", (req, res) => {
//   res.json({ mssg: "Get single anime" });
// });
router.get('/:id', getAnime)

//get all comme
router.get("/", (req, res) => {
  res.json({ mssg: "Get All comments" });
});

//post new Anime
router.post("/", addAnime );

//post Comment
router.post("/", (req, res) => {
  res.json({ mssg: "Post comment" });
});



//delete comment
// router.delete("/:id", (req, res) => {
//   res.json({ mssg: "Delete comment" });
// });
router.delete("/:id", deleteAnime);


//update Anime
// router.patch("/:id", (req, res) => {
//   res.json({ mssg: "UPDATE a Anime" });
// });
router.patch('/:id', updateAnime)

module.exports = router;
