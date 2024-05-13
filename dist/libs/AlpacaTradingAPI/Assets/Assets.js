"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const AlpacaConfig_1 = __importDefault(require("../../AlpacaConfig/AlpacaConfig"));
class Assets extends AlpacaConfig_1.default {
    getAssets(params) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
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
    getAnAssetByIDorSymbol(params) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
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
    getOptionContracts(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/options/contracts",
                version: "v2",
                method: "get",
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
    getOptionContractByIDorSymbol(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/options/contracts/" + param.symbol_or_asset_id,
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
exports.default = Assets;
// super - allows access to the parent class
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it
