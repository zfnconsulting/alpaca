"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistoricalBars = exports.getHistoricalAuctionsInput = exports.getWatchlistbyID_input = exports.queryParams = exports.getWatchlistbyNameInput = exports.addAssettoWatchlistInput = exports.updateWatchlistById_input = exports.createWatchlist_input = exports.deleteOrderbyID_input = exports.replaceOrderbyID_input = exports.getOrderById_input = exports.deleteAllOrders_input = exports.getAllOrders_input = exports.createAnOrder_input = exports.getSpecificAnnouncement_input = exports.getAnnouncements_input = exports.getOptionContractByIDorSymbol_input = exports.getOptionContracts_input = exports.getAssets_input = exports.getAnAssetByIDorSymbol_input = void 0;
const date_fns_1 = require("date-fns");
exports.getAnAssetByIDorSymbol_input = { symbol_or_asset_id: "AAPL" };
exports.getAssets_input = null;
exports.getOptionContracts_input = {
    underlying_symbols: "SPY",
    show_deliverables: true,
    status: "active",
    expiration_date: "2024-05-06",
    limit: 1,
};
exports.getOptionContractByIDorSymbol_input = {
    symbol_or_asset_id: "SPY240506C00450000",
};
const date = (0, date_fns_1.addDays)(new Date("2024-03-12"), 1);
exports.getAnnouncements_input = {
    ca_types: "split", // dividend, merger, spinoff, split
    since: (0, date_fns_1.format)(date, "yyyy-MM-dd"),
    until: (0, date_fns_1.format)((0, date_fns_1.addDays)(date, 90), "yyyy-MM-dd"),
    symbol: "AAPI",
    // cusip: "",
    // date_type: "",
};
exports.getSpecificAnnouncement_input = undefined;
exports.createAnOrder_input = {
    symbol: "SPY",
    qty: "1",
    side: "buy",
    type: "limit",
    limit_price: "300",
    time_in_force: "day",
};
exports.getAllOrders_input = {
    status: "closed", // open, closed, all
    limit: 500, // Defaults to 50, min 1, max 500
    after: {
        year: "2024",
        month: "6",
        day: "3",
        hour: "0",
        minute: "0",
        seconds: "0",
        milliseconds: "0",
    },
    // until: string,
    // direction: string,
    // nested: boolean,
    // symbols: string,
    // side: string,
};
exports.deleteAllOrders_input = undefined;
exports.getOrderById_input = {
    order_id: "2e6824c6-bd11-44d3-9faa-146b3912b017",
};
exports.replaceOrderbyID_input = {
    order_id: "2e6824c6-bd11-44d3-9faa-146b3912b017",
};
exports.deleteOrderbyID_input = {
    order_id: "59f77b34-7d91-4746-a93e-119cf8d2ad21",
};
// export const getAllOpenPositions_input =
// export const closeAllPositions_input =
// export const getOpenPosition_input =
// export const closePosition_input =
// export const exerciseOptionPosition_input =
// getAllOpenPositions_input,
// closeAllPositions_input,
// getOpenPosition_input,
// closePosition_input,
// exerciseOptionPosition_input,
exports.createWatchlist_input = {
    name: "testWatchlist",
    symbols: ["AAPL", "TSLA", "MSFT"],
};
exports.updateWatchlistById_input = {
    watchlist_id: "5c1273cc-f139-4f3c-83a1-5dfe6952bc74",
    name: "testWatchlist2",
    symbols: ["SPY"],
};
exports.addAssettoWatchlistInput = {
    name: "testWatchlist",
};
exports.getWatchlistbyNameInput = {
    name: "testWatchlist",
};
exports.queryParams = {
    period: "1M",
    timeframe: "1Min",
    intraday_reporting: "market_hours",
    pnl_reset: "per_day",
    start: "2021-03-16T18:38:01Z",
    end: "2021-03-16T18:38:01Z",
};
exports.getWatchlistbyID_input = {
    watchlist_id: "1",
    name: "test",
    symbols: ["AAPL"],
};
exports.getHistoricalAuctionsInput = {
    symbols: "AAPL",
    // timeframe: "1Min",
    //   start: "2024-05-16T00:00:00Z",
    //   end: "2024-05-17T00:00:00Z",
    //   limit: 1000,
    //   feed: "sip",
    //   adjustment: "all",
    // page_token: "",
    //   sort: "asc",
};
exports.getHistoricalBars = {
    symbols: "AAPL",
    timeframe: "1Min",
    //   start: "2024-05-16T00:00:00Z",
    //   end: "2024-05-17T00:00:00Z",
    //   limit: 1000,
    //   feed: "sip",
    //   adjustment: "all",
    // page_token: "",
    //   sort: "asc",
};
