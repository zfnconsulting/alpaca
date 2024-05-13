import AlpacaConfig from "../../AlpacaConfig/AlpacaConfig";
declare class Clock extends AlpacaConfig {
    getMarketClockInfo(): Promise<any>;
}
export default Clock;
