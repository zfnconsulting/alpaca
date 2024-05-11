"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./libs/Alpaca/Account/Account"));
const Assets_1 = __importDefault(require("./libs/Alpaca/Assets/Assets"));
const CorporateActions_1 = __importDefault(require("./libs/Alpaca/CorporateActions/CorporateActions"));
const Orders_1 = __importDefault(require("./libs/Alpaca/Order/Orders"));
const Positions_1 = __importDefault(require("./libs/Alpaca/Positions/Positions"));
class Alpaca {
    auth;
    constructor(auth) {
        this.auth = auth;
        this.auth = auth;
    }
    getAccount() {
        return new Account_1.default(this.auth).getAccount();
    }
    getAssets(params) {
        return new Assets_1.default(this.auth).getAssets(params);
    }
    getAnAssetByIDorSymbol(params) {
        return new Assets_1.default(this.auth).getAnAssetByIDorSymbol(params);
    }
    getOptionContracts(param) {
        return new Assets_1.default(this.auth).getOptionContracts(param);
    }
    getOptionContractByIDorSymbol(param) {
        return new Assets_1.default(this.auth).getOptionContractByIDorSymbol(param);
    }
    getSpecificAnnouncement(id) {
        return new CorporateActions_1.default(this.auth).getSpecificAnnouncement(id);
    }
    getAnnouncements(param) {
        return new CorporateActions_1.default(this.auth).getAnnouncements(param);
    }
    createAnOrder(param) {
        return new Orders_1.default(this.auth).createAnOrder(param);
    }
    getAllOrders(param) {
        return new Orders_1.default(this.auth).getAllOrders(param);
    }
    deleteAllOrders() {
        return new Orders_1.default(this.auth).deleteAllOrders();
    }
    getOrderById(param) {
        return new Orders_1.default(this.auth).getOrderById(param);
    }
    replaceOrderbyID(param) {
        return new Orders_1.default(this.auth).replaceOrderbyID(param);
    }
    deleteOrderbyID(param) {
        return new Orders_1.default(this.auth).deleteOrderbyID(param);
    }
    getAllOpenPositions() {
        return new Positions_1.default(this.auth).getAllOpenPositions();
    }
    closeAllPositions(param) {
        return new Positions_1.default(this.auth).closeAllPositions(param);
    }
    getOpenPosition(param) {
        return new Positions_1.default(this.auth).getOpenPosition(param);
    }
    closePosition(param) {
        return new Positions_1.default(this.auth).closePosition(param);
    }
    exerciseOptionPosition(param) {
        return new Positions_1.default(this.auth).exerciseOptionPosition(param);
    }
}
exports.default = Alpaca;
