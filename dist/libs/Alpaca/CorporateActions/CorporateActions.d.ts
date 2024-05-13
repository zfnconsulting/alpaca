import { GetAnnouncements } from "../../TypescriptTypes/TradingAPI";
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
export default class CorporateActions extends AlpacaConfig {
    getSpecificAnnouncement(id: string): Promise<any>;
    getAnnouncements(param: GetAnnouncements): Promise<any>;
}
