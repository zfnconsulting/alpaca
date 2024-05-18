"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTTPDataConfig {
    auth;
    constructor(auth) {
        this.auth = auth;
        this.auth = auth;
    }
    httpRequestConfig(config) {
        const baseURL = this.auth["paper"]
            ? "https://data.sandbox.alpaca.markets/"
            : "https://data.alpaca.markets/";
        const configuration = {
            method: config.method,
            baseURL: baseURL + config.version,
            url: config.url,
            headers: {
                accept: "application/json",
                "APCA-API-KEY-ID": this.auth["keyId"],
                "APCA-API-SECRET-KEY": this.auth["secretKey"],
            },
        };
        if (config.method.toLocaleLowerCase() === "get") {
            configuration["params"] = config.params;
            return configuration;
        }
        if (config.data) {
            configuration["data"] = config.data;
        }
        return configuration;
    }
}
exports.default = HTTPDataConfig;
