import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
import { GetAccountPortfolioHistory } from "../../TypescriptTypes/TradingAPI";
declare class PortfolioHistory extends AlpacaConfig {
    getAccountPortfolioHistory(query: GetAccountPortfolioHistory): Promise<any>;
}
export default PortfolioHistory;
