"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
class Database {
    constructor(dbname, username, password, options = {}) {
        this.dbname = dbname;
        this.username = username;
        this.password = password;
        const defaultOptions = {
            dialect: 'mysql',
            host: 'localhost',
            operatorsAliases: false,
            pool: {
                acquire: 30000,
                idle: 10000,
                max: 5,
                min: 0
            }
        };
        this.sequelize = new Sequelize(this.dbname, this.username, this.password, defaultOptions);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sequelize.authenticate();
        });
    }
}
//# sourceMappingURL=database.js.map