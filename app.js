const express = require('express');
const app = express();
constPORT = 3000 ;
app.use(express.json());

app.get("/", (req, res) => {
    console.log("OBTENIR la demande réussie!");
    res.send("Obtenir la demande lancée avec succès");
})

app.post("/post", (req, res) => {
    console.log("POST REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send("Data POST Request Recieved");
  });


  app.put("/put", (req, res) => {
    console.log("PUT REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send("Data Update Request Recieved");
  });

app.listen(PORT, () => {
    console.log('Server established at ${PORT}');

})
app.delete("/delete", (req, res) => {
    console.log("DELETE REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send("Data DELETE Request Recieved");
  });

