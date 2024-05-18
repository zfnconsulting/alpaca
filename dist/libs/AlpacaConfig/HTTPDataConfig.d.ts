import { Authentication } from "../TypescriptTypes/TradingAPI";
import { AxiosParmConfig, AxiosConfigurationObject } from "../TypescriptTypes/AxiosConfigurationPhasetypes";
declare class HTTPDataConfig {
    protected readonly auth: Authentication;
    constructor(auth: Authentication);
    httpRequestConfig(config: AxiosParmConfig): AxiosConfigurationObject;
}
export default HTTPDataConfig;
