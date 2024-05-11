"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPConfig_1 = __importDefault(require("../HTTPConfig/HTTPConfig"));
class AlpacaConfig {
    auth;
    httpConfig;
    constructor(auth) {
        this.auth = auth;
        this.auth = auth;
        this.httpConfig = new HTTPConfig_1.default(this.auth);
    }
}
exports.default = AlpacaConfig;
