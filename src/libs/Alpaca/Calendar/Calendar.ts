import { l } from "@zufan_devops/console";
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
import axios from "axios";
import { GetMarketCalendarinfo } from "../../TypescriptTypes/TradingAPI";
class Calendar extends AlpacaConfig {
  getMarketCalendarinfo(query?: GetMarketCalendarinfo) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/calendar",
            method: "get",
            version: "v2",
            params: query,
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }
}
export default Calendar;
