"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const AlpacaConfig_1 = __importDefault(require("../../AlpacaConfig/AlpacaConfig"));
class Positions extends AlpacaConfig_1.default {
    getAllOpenPositions() {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/positions",
                version: "v2",
                method: "GET",
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
    closeAllPositions(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/positions",
                version: "v2",
                method: "DELETE",
                params: param,
            }))
                .then((res) => {
                if (res.status === 207)
                    return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
    getOpenPosition(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/positions",
                version: "v2",
                method: "GET",
                params: param,
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
    closePosition(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/positions",
                version: "v2",
                method: "DELETE",
                params: param,
            }))
                .then((res) => {
                if (res.status === 207)
                    return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
    exerciseOptionPosition(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/positions",
                version: "v2",
                method: "POST",
                params: param,
            }))
                .then((res) => {
                if (res.status === 207)
                    return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = Positions;
// super - allows access to the parent class
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it
