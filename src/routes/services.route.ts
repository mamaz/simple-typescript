import * as express from "express";
const router = express.Router();

/*
  /services
*/
router.get("/", (req, res, next) => {
  res.send("/services");
});

module.exports = router;
