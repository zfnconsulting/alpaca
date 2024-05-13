import { l } from "@zufan_devops/console";
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
import { AccountConfigurations } from "../../TypescriptTypes/TradingAPI";
import axios from "axios";
class AccountConfiguration extends AlpacaConfig {
  getAccountConfigurations() {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/account/configurations",
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
  updateAccountConfigurations(data: AccountConfigurations) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/account/configurations",
            method: "put",
            version: "v2",
            data: data,
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
export default AccountConfiguration;
