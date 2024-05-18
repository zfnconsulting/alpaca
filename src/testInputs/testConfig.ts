import { Authentication } from "../libs/TypescriptTypes/TradingAPI";

export const development: boolean = process.env.development === "true";
export const config: Authentication = {
  keyId: development
    ? String(process.env.dev_alpacaAPIKey)
    : String(process.env.alpacaAPIKey),
  secretKey: development
    ? String(process.env.dev_alpacaSecretKey)
    : String(process.env.alpacaSecretKey),
  paper: development,
};

// const feed = "sip";
const feed = "iex";
// export const wssStockData = development
//   ? `wss://stream.data.sandbox.alpaca.markets/v2/${feed}`
//   : `wss://stream.data.alpaca.markets/v2/${feed}`;

export const wssCryptoData = development
  ? "wss://stream.data.sandbox.alpaca.markets/v1beta3/crypto/us"
  : "wss://stream.data.alpaca.markets/v1beta3/crypto/us";

export const wssNewsData = development
  ? "wss://stream.data.alpaca.markets/v1beta1/news"
  : "wss://stream.data.sandbox.alpaca.markets/v1beta1/news";

export const wssOptionData = development
  ? `wss://stream.data.alpaca.markets/v1beta1/${feed}`
  : `wss://stream.data.sandbox.alpaca.markets/v1beta1/${feed}`;
export const wssStockData = "wss://stream.data.alpaca.markets/v2/test";
export const auth = {
  action: "auth",
  key: development ? process.env.dev_alpacaAPIKey : process.env.alpacaAPIKey,
  secret: development
    ? process.env.dev_alpacaSecretKey
    : process.env.alpacaSecretKey,
};

export const stockSubscribe = {
  action: "subscribe",
  trades: ["AAPL"],
  quotes: ["AMD", "CLDR"],
  bars: ["*"],
};
