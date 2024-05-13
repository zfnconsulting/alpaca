"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AlpacaConfig_1 = __importDefault(require("../../AlpacaConfig/AlpacaConfig"));
const axios_1 = __importDefault(require("axios"));
class Watchlists extends AlpacaConfig_1.default {
    getAllWatchlists() {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists",
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
    createWatchlist(data) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists",
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
    getWatchlistbyID(id) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists/" + id,
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
    updateWatchlistById(id) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists/" + id.watchlist_id,
                method: "put",
                version: "v2",
                data: {
                    name: id.name,
                    symbols: id.symbols,
                },
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
    addAssettoWatchlist(id) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists/" + id.watchlist_id + "/assets",
                method: "post",
                version: "v2",
                data: {
                    symbols: id.symbols,
                },
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
    deleteWatchlistById(id) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists/" + id.watchlist_id,
                method: "delete",
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
    getWatchlistbyName(name) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists?by_name?name=" + name.name,
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
    updateWatchlistByName(name) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists?by_name?name=" + name.currentName,
                method: "put",
                version: "v2",
                data: {
                    name: name.newName,
                    symbols: name.symbols,
                },
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
    addAssettoWatchlistByName(name) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists?by_name?name=" + name.name,
                method: "post",
                version: "v2",
                data: {
                    symbols: name.symbols,
                },
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
    deleteWatchlistByName(name) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists?by_name?name=" + name.name,
                method: "delete",
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
    deleteSymbolfromWatchlist(id) {
        try {
            return axios_1.default
                .request(this.httpConfig.httpRequestConfig({
                url: "/watchlists/" + id.watchlist_id + "/assets/" + id.symbol,
                method: "delete",
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
}
exports.default = Watchlists;
