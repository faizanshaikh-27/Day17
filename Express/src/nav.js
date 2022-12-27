const express = require("express");
const app = express();
const port = 2000;

app.get("/", (req, res) => {
    res.send("Welcome to Home page");
});

app.get("/about", (req, res) => {
    res.send("Welcome to About page");
    res.statusCode(200);
});

app.get("/contactus", (req, res) => {
    res.send("Welcome to Contact page");
});

app.get("/temp", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Faizan",
        },

        {
            id: 2,
            name: "Sameer",
        },

        {
            id: 1,
            name: "Ahmed",
        },

        {
            id: 1,
            name: "Express",
        }
    ]);
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})