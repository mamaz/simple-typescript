"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
/*
  /services
*/
router.get('/', (req, res, next) => {
    res.send('/services');
});
// create
router.post('/', (req, res, next) => {
    res.send('/services');
});
// update
router.post('/:id', (req, res, next) => {
    res.send('/services');
});
router.delete('/:id', (req, res, next) => {
    res.send('/services');
});
exports.default = router;
//# sourceMappingURL=services.route.js.map