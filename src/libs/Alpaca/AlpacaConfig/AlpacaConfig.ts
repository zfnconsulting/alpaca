import HTTPConfig from "../HTTPConfig/HTTPConfig";
import { Authentication } from "../../TypescriptTypes/InputTypes";
export default class AlpacaConfig {
  protected readonly httpConfig: HTTPConfig;
  constructor(protected readonly auth: Authentication) {
    this.auth = auth;
    this.httpConfig = new HTTPConfig(this.auth);
  }
}
