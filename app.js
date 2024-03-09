const express = require('express');
const app = express();
constPORT = 3000 ;
app.use(express.json());

app.get("/", (req, res) => {
    console.log("OBTENIR la demande réussie!");
    res.send("Obtenir la demande lancée avec succès");
})

app.listen(PORT, () => {
    console.log('Server established at ${PORT}');

})
