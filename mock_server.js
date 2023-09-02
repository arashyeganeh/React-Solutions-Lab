const path = require("path");
const express = require("express");
const app = express();
const port = 3001;

const SHOP_DATA = [
  {
    id: 0,
    product_name: "iPhone 6S",
    product_description:
      "A classic smartphone from Apple, featuring a powerful processor and a stunning Retina display.",
    price: 799,
  },
  {
    id: 1,
    product_name: "iPhone 5S",
    product_description:
      "A previous-generation iPhone known for its sleek design and compact size.",
    price: 349,
  },
  {
    id: 2,
    product_name: "Macbook",
    product_description:
      "The flagship laptop from Apple, offering high performance and an elegant design.",
    price: 1499,
  },
  {
    id: 3,
    product_name: "Macbook Air",
    product_description:
      "A lightweight and portable laptop with all-day battery life, perfect for on-the-go professionals.",
    price: 999,
  },
  {
    id: 4,
    product_name: "Macbook Air 2013",
    product_description:
      "An older version of the Macbook Air, still capable of handling everyday tasks.",
    price: 599,
  },
  {
    id: 5,
    product_name: "Macbook Air 2012",
    product_description:
      "A previous-generation Macbook Air, offering a balance between performance and portability.",
    price: 499,
  },
  {
    id: 6,
    product_name: "iPad Pro",
    product_description:
      "The ultimate tablet for productivity and creativity, equipped with a powerful chipset and a stunning display.",
    price: 1099,
  },
];

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
    res.json(SHOP_DATA);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/axios/loading", async (req, res) => {
  await setTimeout(async () => {
    // Delay
    try {
      res.json(SHOP_DATA);
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
