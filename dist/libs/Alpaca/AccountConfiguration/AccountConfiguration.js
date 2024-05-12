"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AlpacaConfig_1 = __importDefault(require("../AlpacaConfig/AlpacaConfig"));
const axios_1 = __importDefault(require("axios"));
class AccountConfiguration extends AlpacaConfig_1.default {
    getAccountConfigurations() {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/account/configurations",
                method: "get",
                version: "v2",
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
    updateAccountConfigurations(data) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/account/configurations",
                method: "put",
                version: "v2",
                data: data,
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
exports.default = AccountConfiguration;
