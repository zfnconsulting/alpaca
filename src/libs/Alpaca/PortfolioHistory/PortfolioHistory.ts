import axios from "axios";
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
import { GetAccountPortfolioHistory } from "../../TypescriptTypes/InputTypes";
class PortfolioHistory extends AlpacaConfig {
  getAccountPortfolioHistory(query: GetAccountPortfolioHistory) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/account/portfolio/history",
            version: "v2",
            method: "get",
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
export default PortfolioHistory;
