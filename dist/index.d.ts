import { Authentication } from "./libs/TypescriptTypes/TradingAPI";
declare class Alpaca {
    private readonly auth;
    constructor(auth: Authentication);
    getAccount(): void;
}
export default Alpaca;
