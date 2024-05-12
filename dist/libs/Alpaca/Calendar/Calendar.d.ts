import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
import { GetMarketCalendarinfo } from "../../TypescriptTypes/InputTypes";
declare class Calendar extends AlpacaConfig {
    getMarketCalendarinfo(query?: GetMarketCalendarinfo): Promise<any>;
}
export default Calendar;
