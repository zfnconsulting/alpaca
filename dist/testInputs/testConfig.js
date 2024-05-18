"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockSubscribe = exports.auth = exports.wssStockData = exports.wssOptionData = exports.wssNewsData = exports.wssCryptoData = exports.config = exports.development = void 0;
exports.development = process.env.development === "true";
exports.config = {
    keyId: exports.development
        ? String(process.env.dev_alpacaAPIKey)
        : String(process.env.alpacaAPIKey),
    secretKey: exports.development
        ? String(process.env.dev_alpacaSecretKey)
        : String(process.env.alpacaSecretKey),
    paper: exports.development,
};
// const feed = "sip";
const feed = "iex";
// export const wssStockData = development
//   ? `wss://stream.data.sandbox.alpaca.markets/v2/${feed}`
//   : `wss://stream.data.alpaca.markets/v2/${feed}`;
exports.wssCryptoData = exports.development
    ? "wss://stream.data.sandbox.alpaca.markets/v1beta3/crypto/us"
    : "wss://stream.data.alpaca.markets/v1beta3/crypto/us";
exports.wssNewsData = exports.development
    ? "wss://stream.data.alpaca.markets/v1beta1/news"
    : "wss://stream.data.sandbox.alpaca.markets/v1beta1/news";
exports.wssOptionData = exports.development
    ? `wss://stream.data.alpaca.markets/v1beta1/${feed}`
    : `wss://stream.data.sandbox.alpaca.markets/v1beta1/${feed}`;
exports.wssStockData = "wss://stream.data.alpaca.markets/v2/test";
exports.auth = {
    action: "auth",
    key: exports.development ? process.env.dev_alpacaAPIKey : process.env.alpacaAPIKey,
    secret: exports.development
        ? process.env.dev_alpacaSecretKey
        : process.env.alpacaSecretKey,
};
exports.stockSubscribe = {
    action: "subscribe",
    trades: ["AAPL"],
    quotes: ["AMD", "CLDR"],
    bars: ["*"],
};
