import HTTPDataConfig from "./HTTPDataConfig";
import { Authentication } from "../TypescriptTypes/TradingAPI";
export default class AlpacaDataConfig {
    protected readonly auth: Authentication;
    protected readonly httpConfig: HTTPDataConfig;
    constructor(auth: Authentication);
}
