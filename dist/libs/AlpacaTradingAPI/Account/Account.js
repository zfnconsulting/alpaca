"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const AlpacaConfig_1 = __importDefault(require("../../AlpacaConfig/AlpacaConfig"));
class Account extends AlpacaConfig_1.default {
    getAccount() {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/account",
                version: "v2",
                method: "get",
            }))
                .then((res) => {
                if (res.status === 200)
                    return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = Account;
