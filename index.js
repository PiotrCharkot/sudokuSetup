const express = require("express");
const Datastore = require("nedb");
const app = express();

app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const datastore = new Datastore("datastore.db");
datastore.loadDatabase();

app.post("/gridMaker", (request, response) => {
  console.log(request.body);
  datastore.insert(request.body);
  response.json({
    status: "succes!",
  });
});
