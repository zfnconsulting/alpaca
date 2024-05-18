import { Authentication } from "../libs/TypescriptTypes/TradingAPI";
export declare const development: boolean;
export declare const config: Authentication;
export declare const wssCryptoData: string;
export declare const wssNewsData: string;
export declare const wssOptionData: string;
export declare const wssStockData = "wss://stream.data.alpaca.markets/v2/test";
export declare const auth: {
    action: string;
    key: string | undefined;
    secret: string | undefined;
};
export declare const stockSubscribe: {
    action: string;
    trades: string[];
    quotes: string[];
    bars: string[];
};
