"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AlpacaConfig_1 = __importDefault(require("../../AlpacaConfig/AlpacaConfig"));
class Account extends AlpacaConfig_1.default {
    getAccount() {
        try {
            const config = this.httpConfig.httpRequestConfig({
                url: "/account",
                method: "get",
                version: "v2",
                section: "trading",
                //
                query: {
                    status: "active",
                    asset_class: "us_equity",
                    exchange: "AMEX",
                    attributes: [
                        "ptp_no_exception",
                        "ptp_with_exception",
                        "ipo",
                        "has_options",
                    ],
                },
            });
            // l(config);
            return;
            // return axios
            //   .request(
            //     this.httpConfig.httpRequestConfig({
            //       url: "/account",
            //       method: "get",
            //       version: "v2",
            //       section: "trading",
            //     })
            //   )
            //   .then((res) => {
            //     if (res.status === 200) return res.data;
            //   });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = Account;
