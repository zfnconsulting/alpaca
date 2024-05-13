import axios from "axios";
import AlpacaConfig from "../../AlpacaConfig/AlpacaConfig";
export default class Account extends AlpacaConfig {
  getAccount() {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/account",
            version: "v2",
            method: "get",
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
