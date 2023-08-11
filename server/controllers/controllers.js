 const Anime = require("../models/animeModel");
const mongoose = require("mongoose");

 //get all
  const getALLAnime = async(req, res) => {
    const anime = await Anime.find({}).sort({name: 1})

    res.status(200).json(anime)
  }

  //get by id
   const getAnime = async (req, res) => {
     const { id } = req.params
     if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid'})
     }
const anime = await Anime.findById(id)

if (!anime) {
    return res.status(404).json({error: 'not found'})
}

res.status(200).json(anime)
    
   };


 const addAnime = async (req, res ) => {
      const { name, number_of_Episodes, type, description } = req.body;

      try {
        const anime = await Anime.create({
          name,
          number_of_Episodes,
          type,
          description,
        });
        res.status(200).json(anime);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
 }

 //delete
 const deleteAnime = async(req, res) => {
       const { id } = req.params;
       if (!mongoose.Types.ObjectId.isValid(id)) {
         return res.status(404).json({ error: "Invalid" });
       }
        const anime = await Anime.findOneAndDelete({_id: id})

        if (!anime) {
          return res, status(404).json({ error: "not found" });
        } 
res.status(200).json(anime)
        
 }

 //update
 const updateAnime = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(400).json({ error: "No such " });
   }

   const anime = await Anime.findOneAndUpdate(
     { _id: id },
     {
       ...req.body,
     }
   );

   if (!anime) {
     return res.status(400).json({ error: "No such workout" });
   }

   res.status(200).json(anime);
 };

 module.exports =  {
    addAnime,
    getALLAnime,
    getAnime,
    deleteAnime,
    updateAnime
 }