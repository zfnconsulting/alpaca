import { clear, l } from "@zufan_devops/console";
import axios from "axios";
import AlpacaConfig from "../../AlpacaConfig/AlpacaConfig";
export default class Account extends AlpacaConfig {
  getAccount() {
    try {
      const config = this.httpConfig.httpRequestConfig({
        url: "/account",
        method: "get",
        version: "v2",
        section: "trading",
        //
        query: {
          status: "active",
          asset_class: "us_equity",
          exchange: "AMEX",
          attributes: [
            "ptp_no_exception",
            "ptp_with_exception",
            "ipo",
            "has_options",
          ],
        },
      });
      // l(config);

      return;
      // return axios
      //   .request(
      //     this.httpConfig.httpRequestConfig({
      //       url: "/account",
      //       method: "get",
      //       version: "v2",
      //       section: "trading",
      //     })
      //   )
      //   .then((res) => {
      //     if (res.status === 200) return res.data;
      //   });
    } catch (error) {
      throw error;
    }
  }
}
