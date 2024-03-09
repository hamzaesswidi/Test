const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.put("/put", (req, res) => {
  console.log("PUT REQUEST SUCCESSFUL");
  console.log(req.body);
  res.send("Data Update Request Recieved");
});

app.listen(PORT, () => {
  console.log("Server established at ${PORT}");
});