const path = require("path");
const express = require("express");
const fs = require("fs/promises");
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.get("/api/axios/loading", async (req, res) => {
  await setTimeout(async () => {
    // Delay
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

app.get("/api/axios/infinite", (req, res) => {
  let baseData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  try {
    const page = req.query.page;
    if (page) {
      let data = baseData.map((item) => item + 10 * page);
      res.send(data);
    } else {
      res.send(baseData);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/axios/form", (req, res) => {
  try {
    const name = req.body.name || "unknown";
    res.send(`Hi ${name}`);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/axios/parallel/:text", (req, res) => {
  try {
    res.send(req.params.text);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
