const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const Photo = require("./models/Photo");
const mongoose = require("mongoose");

// TEMPLATE ENGİNE
app.set("view engine", "ejs");

// MİDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// CONNECT TO DB
mongoose.connect("mongodb+srv://efecanbaran:jakojako080@blogapp.6s79v.mongodb.net/photos?retryWrites=true&w=majority",
    () => {
        console.log("Connected to db");
    })

//ROUTE 

app.get("/", async (req, res) => {
    const photos = await Photo.find();
    res.render("index", {
        photos
    })
})

app.get("/photos/:photoId", async (req, res) => {
    const photo = await Photo.findById(req.params.photoId)
    res.render("photo", {
        photo
    })
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/add", (req, res) => {
    res.render("add")
})

app.post("/photos", async (req, res) => {
    await Photo.create(req.body)

    res.redirect("/")
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})