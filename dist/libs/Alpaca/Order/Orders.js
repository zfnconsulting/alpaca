"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const AlpacaConfig_1 = __importDefault(require("../AlpacaConfig/AlpacaConfig"));
const time_1 = __importDefault(require("../../dataTime/time"));
class Orders extends AlpacaConfig_1.default {
    createAnOrder(param) {
        try {
            const configs = this.httpConfig.httpRequestConfig({
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
            const configs = this.httpConfig.httpRequestConfig({
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
            const configs = this.httpConfig.httpRequestConfig({
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
            const configs = this.httpConfig.httpRequestConfig({
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
            const configs = this.httpConfig.httpRequestConfig({
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
            const configs = this.httpConfig.httpRequestConfig({
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
exports.default = Orders;
// super - allows access to the parent class
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it
