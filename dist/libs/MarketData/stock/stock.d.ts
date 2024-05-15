import AlpacaConfig from "../../AlpacaConfig/AlpacaConfig";
import { GetHistoricalAuctions, GetHistoricalBars, GetLatestBars, GetConditionCodes, GetHistoricalQuotes, GetLatestQuotes, GetSnapshots, GetHistoricalTrades, GetLatestTrades, GetHistoricalAuctionsSingleSymbol, GetHistoricalBarsSingleSymbol, GetLatestBarSingleSymbol, GetHistoricalQuotesSingleSymbol, GetLatestQuoteSingleSymbol, GetSnapshotSingleSymbol, GetHistoricalTradesSingleSymbol, GetLatestTradeSingleSymbol } from "../../TypescriptTypes/MarketAPI/StockPhaseTypes";
declare class Stock extends AlpacaConfig {
    getHistoricalAuctions(param: GetHistoricalAuctions): Promise<object>;
    getHistoricalBars(param: GetHistoricalBars): Promise<object>;
    getLatestBars(param: GetLatestBars): Promise<object>;
    getConditionCodes(param: GetConditionCodes): Promise<object>;
    getExchangeCodes(): Promise<object>;
    getHistoricalQuotes(param: GetHistoricalQuotes): Promise<object>;
    getLatestQuotes(param: GetLatestQuotes): Promise<object>;
    getSnapshots(param: GetSnapshots): Promise<object>;
    getHistoricalTrades(param: GetHistoricalTrades): Promise<object>;
    getLatestTrades(param: GetLatestTrades): Promise<object>;
    getHistoricalAuctionsSingleSymbol(param: GetHistoricalAuctionsSingleSymbol): Promise<object>;
    getHistoricalBarsSingleSymbol(param: GetHistoricalBarsSingleSymbol): Promise<object>;
    getLatestBarSingleSymbol(param: GetLatestBarSingleSymbol): Promise<object>;
    getHistoricalQuotesSingleSymbol(param: GetHistoricalQuotesSingleSymbol): Promise<any>;
    getLatestQuoteSingleSymbol(param: GetLatestQuoteSingleSymbol): Promise<object>;
    getSnapshotSingleSymbol(param: GetSnapshotSingleSymbol): Promise<object>;
    getHistoricalTradesSingleSymbol(param: GetHistoricalTradesSingleSymbol): Promise<object>;
    getLatestTradeSingleSymbol(param: GetLatestTradeSingleSymbol): Promise<object>;
}
export default Stock;
