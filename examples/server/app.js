const path = require("path");
const express = require("express");
const fs = require("fs/promises");
const app = express();
const port = 3001;

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/axios/shop", async (req, res) => {
  try {
    const data = await fs.readFile(
      path.resolve(__dirname, "data", "shop.json"),
      "utf-8"
    );
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/axios/shop/loading", async (req, res) => {
  await setTimeout(async () => { // Delay
    try {
      const data = await fs.readFile(
        path.resolve(__dirname, "data", "shop.json"),
        "utf-8"
      );
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }, 5000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
