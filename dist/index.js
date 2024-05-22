"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// TradingAPI
const Account_1 = __importDefault(require("./libs/AlpacaTradingAPI/Account/Account"));
// import Assets from "./libs/AlpacaTradingAPI/Assets/Assets";
// import CorporateActions from "./libs/AlpacaTradingAPI/CorporateActions/CorporateActions";
// import Orders from "./libs/AlpacaTradingAPI/Order/Orders";
// import Positions from "./libs/AlpacaTradingAPI/Positions/Positions";
// import PortfolioHistory from "./libs/AlpacaTradingAPI/PortfolioHistory/PortfolioHistory";
// import Watchlists from "./libs/AlpacaTradingAPI/Watchlists/Watchlists";
// import AccountConfiguration from "./libs/AlpacaTradingAPI/AccountConfiguration/AccountConfiguration";
// import Clock from "./libs/AlpacaTradingAPI/Clock/Clock";
// import Calendar from "./libs/AlpacaTradingAPI/Calendar/Calendar";
// import CryptoFunding from "./libs/AlpacaTradingAPI/CryptoFunding/CryptoFunding";
// MarketData
// import Stock from "./libs/MarketData/Stock/Stock";
class Alpaca {
    auth;
    constructor(auth) {
        this.auth = auth;
        this.auth = auth;
    }
    getAccount() {
        return new Account_1.default(this.auth).getAccount();
    }
}
exports.default = Alpaca;
