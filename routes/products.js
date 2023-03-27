import express from "express";
import prices from "./prices.json" assert { type: "json" };
import products from "./styles.json" assert { type: "json" };

const router = express.Router();

/* GET products listing. */
router.get("/", function (req, res, next) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

/* GET product listing. */
router.get("/:id", function (req, res, next) {
  const price = prices.find((product) => product.id === req.params.id);
  const product = products.find((product) => product.id === req.params.id);
  if (product && price) {
    // product.price = price.price;
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify({ ...product, ...price }));
  } else {
    res.status(404).send("Not found");
  }
});

export default router;
