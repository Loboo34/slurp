require("dotenv").config();
const express = require("express");
const animeRoutes = require("./routes/anime");
const userRoutes = require("./routes/User");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/anime", animeRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", userRoutes);

//db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db. Node server is running..");
    });
  })
  .catch((err) => {
    console.log(err);
  });
