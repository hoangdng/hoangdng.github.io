const express = require('express');
const axios = require('axios');
const app = express();

app.get("/", (req, res) => {
  axios
    .get(
      "http://localhost:5000/trackings?handling-unit-reference=CGMU2220003&offset=0&limit=10&desc=false"
    )
    .then(response => {
      console.log(response.data.status);
      // console.log(response.data);
      res.send(response.data.status);
    })
    .catch(error => {
      console.log(error);
    });
    res.send("Hello World, from express");
});
 
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })

