import express from "express";
import dotenv from "dotenv";
import axios from "axios";
//"rewrites": [{ "source": "/api/(.*)", "destination": "/api" }],
const app = express();
dotenv.config();

app.use(express.static("public"));

app.get("/api/flights", (req, res) => {
  const options = {
    //  WITH LIVE API FROM TORONTO-AIRPORT
    method: "GET",
    url: "https://toronto-pearson-airport.p.rapidapi.com/departures",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "toronto-pearson-airport.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data.slice(0, 8));
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(8080, () => console.log("running on port: ", 8080));
