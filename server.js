import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

const app = express();
const PORT = 8080;

dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/flights", (req, res) => {
  const options = {
    //  WITH LIVE API FROM TORONTO-AIRPORT
    method: "GET",
    url: "https://toronto-pearson-airport.p.rapidapi.com/departures",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "toronto-pearson-airport.p.rapidapi.com",
    },
  };

  //  WITH DATA BASE DATA STAX ASTRA DB
  // const options = {
  //   url: `${process.env.URL}?page-size=6`,
  //   headers: {
  //     accept: "application/json",
  //     "X-Cassandra-Token": process.env.TOKEN,
  //   },
  // };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data.slice(0, 8));
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => console.log("running on port: ", PORT));
