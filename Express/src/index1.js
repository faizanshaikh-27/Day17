// Express.js is a Node.js framework
// It is a simple web application framework that provides you a simple API to build websites

// Express API
// get - read
// post - create
// push - update
// delete - delete
const path = require("path");
const express = require("express");
const app = express();

// app.get(route, callback)
//   app.get("/", (req, res) => {
//      https://www.google.com/
// })
// will get google.com by using /

// console.log(__dirname);
const staticPath = path.join(__dirname, '../public')

// built-in middleware
app.use(express.static(staticPath))


app.get("/", (req, res) => {
    res.send("This is an express API home page");
});

app.get("/about", (req, res) => {
    res.send("This is an express API about page");
});

app.listen(3000, () => {
    console.log("listening at port 3000")
})