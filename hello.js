const express = require('express');
const axios = require('axios');
const app = express();

app.get("/", (req, res) => {
  axios
    .get(
      "https://eb78-2001-ee0-4b52-f920-5987-d2e9-75d3-5743.ap.ngrok.io/trackings?handling-unit-reference=CGMU2220003&offset=0&limit=10&desc=false"
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
 
app.listen(process.env.PORT || 8081)

