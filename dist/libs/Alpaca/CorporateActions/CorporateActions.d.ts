import { GetAnnouncements } from "../../TypescriptTypes/InputTypes";
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
export default class CorporateActions extends AlpacaConfig {
    getSpecificAnnouncement(id: string): Promise<any>;
    getAnnouncements(param: GetAnnouncements): Promise<any>;
}
