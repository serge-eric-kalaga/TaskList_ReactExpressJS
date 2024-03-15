const express = require("express");
require("dotenv").config();


const PORT = process.env.PORT;

const app = express()


app.use("/task", require("./api/routes/task"))


app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
})