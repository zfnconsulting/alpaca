"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AlpacaConfig_1 = __importDefault(require("../../AlpacaConfig/AlpacaConfig"));
const axios_1 = __importDefault(require("axios"));
class Stock extends AlpacaConfig_1.default {
    getHistoricalAuctions(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/stocks/auctions",
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
    getHistoricalBars(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/stocks/bars",
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
    getLatestBars(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/stocks/bars/latest",
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
    getConditionCodes(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/stocks/meta/conditions/" + param.ticktype + "/",
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
    getExchangeCodes() {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/stocks/meta/exchanges",
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
    getHistoricalQuotes(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/stocks/quotes",
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
    getLatestQuotes(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/stocks/quotes/latest",
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
    getSnapshots(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/stocks/snapshots",
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
    getHistoricalTrades(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/stocks/trades",
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
    getLatestTrades(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/stocks/trades/latest",
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
    getHistoricalAuctionsSingleSymbol(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: `/stocks/${param.symbols}/auctions`,
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
    getHistoricalBarsSingleSymbol(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: `/stocks/${param.symbols}/bars`,
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
    getLatestBarSingleSymbol(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: `/stocks/${param.symbols}/bars/latest`,
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
    getHistoricalQuotesSingleSymbol(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: `/stocks/${param.symbols}/quotes`,
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
    getLatestQuoteSingleSymbol(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: `/stocks/${param.symbols}/quotes/latest`,
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
    getSnapshotSingleSymbol(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: `/stocks/${param.symbols}/snapshot`,
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
    getHistoricalTradesSingleSymbol(param) {
        try {
            return axios_1.default.request(this.httpConfig.httpRequestConfig({
                url: `stocks/${param.symbols}/trades`,
                version: "v2",
                method: "GET",
                params: param,
            }));
        }
        catch (error) {
            throw error;
        }
    }
    getLatestTradeSingleSymbol(param) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: `/stocks/${param.symbols}/trades/latest`,
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
}
exports.default = Stock;
// getConditionCodes, getHistoricalAuctionsSingleSymbol, getHistoricalBarsSingleSymbol, getLatestBarSingleSymbol, getHistoricalQuotesSingleSymbol getLatestTradeSingleSymbol
