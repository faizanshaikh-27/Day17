const express = require("express");
const app = express();
const port = 9000;
const path = require("path")
 
// const templatePath = path.join(__dirname, "../templates")
// built in middleware
const staticPath = path.join(__dirname, '../public');

// to set view engine
// app.set("view engine", "hbs"); //handelbars

// changing name of views folder
// app.set('views', )


app.use(express.static(staticPath))


// Teamplate engine route
// app.get("/", (req, res) => {
//     res.render("index");
// });

// app.get(route, callback)
app.get("/", (req, res) => {
    res.send("Hello from Express Server")
})

app.listen(port, () => {
    console.log(`Listening at port ${9000}`);
})