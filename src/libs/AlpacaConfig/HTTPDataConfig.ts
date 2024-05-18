import { Authentication } from "../TypescriptTypes/TradingAPI"; //
import {
  AxiosParmConfig,
  AxiosConfigurationObject,
} from "../TypescriptTypes/AxiosConfigurationPhasetypes";
class HTTPDataConfig {
  constructor(protected readonly auth: Authentication) {
    this.auth = auth;
  }
  httpRequestConfig(config: AxiosParmConfig) {
    const baseURL = "https://data.alpaca.markets/";
    const configuration: AxiosConfigurationObject = {
      method: config.method,
      baseURL: baseURL + config.version,
      url: config.url,
      headers: {
        accept: "application/json",
        "APCA-API-KEY-ID": this.auth["keyId"],
        "APCA-API-SECRET-KEY": this.auth["secretKey"],
      },
    };
    if (config.method.toLocaleLowerCase() === "get") {
      configuration["params"] = config.params;
      return configuration;
    }

    if (config.data) {
      configuration["data"] = config.data;
    }
    return configuration;
  }
}

export default HTTPDataConfig;
