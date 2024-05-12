import { l } from "@zufan_devops/console";
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
import axios from "axios";
class Clock extends AlpacaConfig {
  getMarketClockInfo() {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/clock",
            method: "get",
            version: "v2",
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
export default Clock;
