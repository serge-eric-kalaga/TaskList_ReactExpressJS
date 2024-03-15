const express = require("express");
const PORT = 5000;

const app = express()


app.get("/", (req, res, next) => {
    res.json({ message: "App running ..." })
})


app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
})