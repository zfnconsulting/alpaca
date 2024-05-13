"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./libs/AlpacaTradingAPI/Account/Account"));
const Assets_1 = __importDefault(require("./libs/AlpacaTradingAPI/Assets/Assets"));
const CorporateActions_1 = __importDefault(require("./libs/AlpacaTradingAPI/CorporateActions/CorporateActions"));
const Orders_1 = __importDefault(require("./libs/AlpacaTradingAPI/Order/Orders"));
const Positions_1 = __importDefault(require("./libs/AlpacaTradingAPI/Positions/Positions"));
const PortfolioHistory_1 = __importDefault(require("./libs/AlpacaTradingAPI/PortfolioHistory/PortfolioHistory"));
const Watchlists_1 = __importDefault(require("./libs/AlpacaTradingAPI/Watchlists/Watchlists"));
const AccountConfiguration_1 = __importDefault(require("./libs/AlpacaTradingAPI/AccountConfiguration/AccountConfiguration"));
const Clock_1 = __importDefault(require("./libs/AlpacaTradingAPI/Clock/Clock"));
const Calendar_1 = __importDefault(require("./libs/AlpacaTradingAPI/Calendar/Calendar"));
const CryptoFunding_1 = __importDefault(require("./libs/AlpacaTradingAPI/CryptoFunding/CryptoFunding"));
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
    getPortfolioHistory(param) {
        return new PortfolioHistory_1.default(this.auth).getAccountPortfolioHistory(param);
    }
    // Watchlists
    getAllWatchlists() {
        return new Watchlists_1.default(this.auth).getAllWatchlists();
    }
    createWatchlist(data) {
        return new Watchlists_1.default(this.auth).createWatchlist(data);
    }
    getWatchlistbyID(id) {
        return new Watchlists_1.default(this.auth).getWatchlistbyID(id);
    }
    updateWatchlistById(id) {
        return new Watchlists_1.default(this.auth).updateWatchlistById(id);
    }
    addAssettoWatchlist(id) {
        return new Watchlists_1.default(this.auth).addAssettoWatchlist(id);
    }
    deleteWatchlistById(id) {
        return new Watchlists_1.default(this.auth).deleteWatchlistById(id);
    }
    getWatchlistbyName(name) {
        return new Watchlists_1.default(this.auth).getWatchlistbyName(name);
    }
    updateWatchlistByName(name) {
        return new Watchlists_1.default(this.auth).updateWatchlistByName(name);
    }
    addAssettoWatchlistByName(name) {
        return new Watchlists_1.default(this.auth).addAssettoWatchlistByName(name);
    }
    deleteWatchlistByName(name) {
        return new Watchlists_1.default(this.auth).deleteWatchlistByName(name);
    }
    deleteSymbolfromWatchlist(id) {
        return new Watchlists_1.default(this.auth).deleteSymbolfromWatchlist(id);
    }
    getAccountConfigurations() {
        return new AccountConfiguration_1.default(this.auth).getAccountConfigurations();
    }
    updateAccountConfigurations(data) {
        return new AccountConfiguration_1.default(this.auth).updateAccountConfigurations(data);
    }
    getMarketCalendarinfo(param) {
        return new Calendar_1.default(this.auth).getMarketCalendarinfo(param);
    }
    clockAndCalendar() {
        return new Clock_1.default(this.auth).getMarketClockInfo();
    }
    // CryptoFunding
    getRetrieveCryptoFundingWallets(param) {
        return new CryptoFunding_1.default(this.auth).getRetrieveCryptoFundingWallets(param);
    }
    getRetrieveCryptoFundingTransfer() {
        return new CryptoFunding_1.default(this.auth).getRetrieveCryptoFundingTransfer();
    }
    requestNewWithdrawal(data) {
        return new CryptoFunding_1.default(this.auth).requestNewWithdrawal(data);
    }
    getRetrieveSingleCryptoFundingTransfer(queryParams) {
        return new CryptoFunding_1.default(this.auth).getRetrieveSingleCryptoFundingTransfer(queryParams);
    }
    getArrayofWhitelistedAddresses(queryParams) {
        return new CryptoFunding_1.default(this.auth).getArrayofWhitelistedAddresses(queryParams);
    }
    requestNewWhitelistedAddress(data) {
        return new CryptoFunding_1.default(this.auth).requestNewWhitelistedAddress(data);
    }
    deleteWhitelistedAddress(data) {
        return new CryptoFunding_1.default(this.auth).deleteWhitelistedAddress(data);
    }
    getEstimatedGasFee(queryParams) {
        return new CryptoFunding_1.default(this.auth).getEstimatedGasFee(queryParams);
    }
}
exports.default = Alpaca;
