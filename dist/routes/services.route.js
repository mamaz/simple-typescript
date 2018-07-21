"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
/*
  /services
*/
router.get("/", (req, res, next) => {
    res.send("/services");
});
exports.default = router;
//# sourceMappingURL=services.route.js.map