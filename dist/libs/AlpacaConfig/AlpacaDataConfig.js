"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPDataConfig_1 = __importDefault(require("./HTTPDataConfig"));
class AlpacaDataConfig {
    auth;
    httpConfig;
    constructor(auth) {
        this.auth = auth;
        this.auth = auth;
        this.httpConfig = new HTTPDataConfig_1.default(this.auth);
    }
}
exports.default = AlpacaDataConfig;
