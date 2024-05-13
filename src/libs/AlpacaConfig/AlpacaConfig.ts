import HTTPConfig from "./HTTPConfig";
import { Authentication } from "../TypescriptTypes/TradingAPI";
export default class AlpacaConfig {
  protected readonly httpConfig: HTTPConfig;
  constructor(protected readonly auth: Authentication) {
    this.auth = auth;
    this.httpConfig = new HTTPConfig(this.auth);
  }
}
