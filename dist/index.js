"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const time_1 = __importDefault(require("./libs/dataTime/time"));
class Alpaca {
    auth;
    constructor(auth) {
        this.auth = auth;
        this.auth = auth;
    }
    #axiosConfig(config) {
        const configuration = {
            method: config.method,
            baseURL: "https://paper-api.alpaca.markets/" + config.version,
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
    getAnAssetByIDorSymbol(params) {
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
    getOptionContracts(param) {
        try {
            return axios_1.default
                .request(this.#axiosConfig({
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
                .request(this.#axiosConfig({
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
    getSpecificAnnouncement(id) {
        try {
            return axios_1.default
                .request(this.#axiosConfig({
                url: "corporate_actions/announcements/" + id,
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
    getAnnouncements(param) {
        try {
            return axios_1.default
                .request(this.#axiosConfig({
                url: "corporate_actions/announcements",
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
    createAnOrder(param) {
        try {
            const configs = this.#axiosConfig({
                url: "/orders",
                version: "v2",
                method: "POST",
                data: param,
            });
            return axios_1.default.request({ ...configs }).then((res) => {
                if (res.status === 200)
                    return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
    getAllOrders(param) {
        try {
            const paramKeys = ["after", "until"];
            const timeformated = (0, time_1.default)(param, paramKeys);
            const configs = this.#axiosConfig({
                url: "/orders",
                version: "v2",
                method: "GET",
                params: timeformated,
            });
            return axios_1.default.request({ ...configs }).then((res) => {
                if (res.status === 200)
                    return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
    deleteAllOrders() {
        try {
            const configs = this.#axiosConfig({
                url: "/orders",
                version: "v2",
                method: "DELETE",
            });
            return axios_1.default.request({ ...configs }).then((res) => {
                if (res.status === 207)
                    return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
    getOrderById(param) {
        try {
            const configs = this.#axiosConfig({
                url: "/orders",
                version: "v2",
                method: "GET",
                params: param,
            });
            return axios_1.default.request(configs).then((res) => {
                if (res.status === 200)
                    return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
    replaceOrderbyID(param) {
        try {
            const configs = this.#axiosConfig({
                url: "/orders/" + param.order_id,
                version: "v2",
                method: "PATCH",
                data: param,
            });
            return axios_1.default.request(configs).then((res) => {
                if (res.status === 200)
                    return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
    deleteOrderbyID(param) {
        try {
            const configs = this.#axiosConfig({
                url: "/orders/" + param.order_id,
                version: "v2",
                method: "DELETE",
            });
            return axios_1.default.request(configs).then((res) => {
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
