// const express = require("express");
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");

// // Initialize the app and create a port
// const app = express();
// const PORT = process.env.PORT || 8080;

// // Set up body parsing, static, and route middleware
// // app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

// handleRequest = (req, res) => {
//     res.end("It works!! Path Hit: " + req.url);
// }

// // Start the server on the port
// app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
var uuid = require('uuid');
const uuidv1 = require('uuid/v1');

console.log(uuid.v1());

const {v4:uuid4} =require('uuid');


const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

handleRequest = (req, res) => {
    res.end("It Works!! Path Hit: " + req.url);
}

app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});
