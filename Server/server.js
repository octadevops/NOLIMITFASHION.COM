const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/geolocation", async (req, res) => {
  try {
    const response = await axios.get("https://ipinfo.io?token=518c2f755dfb5a");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch geolocation" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
