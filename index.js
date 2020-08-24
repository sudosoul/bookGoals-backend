const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json())


app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});