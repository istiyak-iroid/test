const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
