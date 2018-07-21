"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
/* GET home page. */
router.get("/", (req, res, next) => {
    res.send("Hello");
});
exports.default = router;
//# sourceMappingURL=index.js.map