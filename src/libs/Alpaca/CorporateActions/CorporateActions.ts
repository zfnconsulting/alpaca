import axios from "axios";
import { GetAnnouncements } from "../../TypescriptTypes/TradingAPI"; // input types
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
export default class CorporateActions extends AlpacaConfig {
  getSpecificAnnouncement(id: string) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "corporate_actions/announcements/" + id,
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

  getAnnouncements(param: GetAnnouncements) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "corporate_actions/announcements",
            version: "v2",
            method: "get",
            params: param,
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

// super - allows access to the parent class
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it
