const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Haye meri kismat ",
    statuscode: 200,
  });
});

app.listen(5822, () => {
  console.log("Server running on 5822");
});
