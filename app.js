const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/src/index.html");

    app.use(express.static(__dirname + '/public'));
});
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});


