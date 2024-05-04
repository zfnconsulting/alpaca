"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Alpaca {
    config;
    constructor(config) {
        this.config = config;
        this.config = config;
    }
    #axiosConfig = (config) => ({
        method: config.method,
        baseURL: "https://paper-api.alpaca.markets/" + config.version,
        url: config.url,
        params: config.params,
        headers: {
            accept: "application/json",
            "APCA-API-KEY-ID": this.config["keyId"],
            "APCA-API-SECRET-KEY": this.config["secretKey"],
        },
    });
    getAccount() {
        try {
            return axios_1.default
                .request(this.#axiosConfig({ url: "/account", version: "v2", method: "get" }))
                .then((res) => {
                if (res.status === 200)
                    return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
    getAssets(params) {
        try {
            return axios_1.default
                .request(this.#axiosConfig({
                url: "/assets",
                version: "v2",
                method: "get",
                params: params,
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
exports.default = Alpaca;
