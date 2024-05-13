"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AlpacaConfig_1 = __importDefault(require("../AlpacaConfig/AlpacaConfig"));
const axios_1 = __importDefault(require("axios"));
class CryptoFunding extends AlpacaConfig_1.default {
    getRetrieveCryptoFundingWallets(queryParams) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/wallets",
                method: "get",
                version: "v2",
                params: queryParams,
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
    getRetrieveCryptoFundingTransfer() {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "wallets/transfers/",
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
    requestNewWithdrawal(data) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/wallets/transfers/",
                method: "post",
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
    getRetrieveSingleCryptoFundingTransfer(queryParams) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/wallets/transfers/",
                method: "get",
                version: "v2",
                params: queryParams,
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
    getArrayofWhitelistedAddresses(queryParams) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/wallets/whitelists",
                method: "get",
                version: "v2",
                params: queryParams,
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
    requestNewWhitelistedAddress(queryParams) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/wallets/whitelists",
                method: "post",
                version: "v2",
                params: queryParams,
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
    deleteWhitelistedAddress(queryParams) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "wallets/whitelists/",
                method: "delete",
                version: "v2",
                params: queryParams,
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
    getEstimatedGasFee(queryParams) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/wallets/fees/estimate",
                method: "get",
                version: "v2",
                params: queryParams,
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
exports.default = CryptoFunding;
