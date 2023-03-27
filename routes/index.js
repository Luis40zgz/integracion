import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.header("Content-Type", "application/json");
  res.send({ message: "Welcome to the ARAGON SKILLS 2023 prices API" });
  //res.json({ message: 'Welcome to the ARAGON SKILLS 2023 prices API' })
});

export default router;
