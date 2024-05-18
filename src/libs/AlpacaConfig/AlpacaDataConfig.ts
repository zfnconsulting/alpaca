import HTTPDataConfig from "./HTTPDataConfig";
import { Authentication } from "../TypescriptTypes/TradingAPI";
export default class AlpacaDataConfig {
  protected readonly httpConfig: HTTPDataConfig;
  constructor(protected readonly auth: Authentication) {
    this.auth = auth;
    this.httpConfig = new HTTPDataConfig(this.auth);
  }
}
