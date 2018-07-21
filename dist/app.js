"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const index_1 = require("./routes/index");
const services_route_1 = require("./routes/services.route");
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", index_1.default);
app.use("/services", services_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map