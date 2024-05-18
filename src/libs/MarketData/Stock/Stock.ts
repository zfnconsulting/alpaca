import { l } from "@zufan_devops/console";
import AlpacaDataConfig from "../../AlpacaConfig/AlpacaDataConfig";
import {
  GetHistoricalAuctions,
  GetHistoricalBars,
  GetLatestBars,
  GetConditionCodes,
  GetHistoricalQuotes,
  GetLatestQuotes,
  GetSnapshots,
  GetHistoricalTrades,
  GetLatestTrades,
  GetHistoricalAuctionsSingleSymbol,
  GetHistoricalBarsSingleSymbol,
  GetLatestBarSingleSymbol,
  GetHistoricalQuotesSingleSymbol,
  GetLatestQuoteSingleSymbol,
  GetSnapshotSingleSymbol,
  GetHistoricalTradesSingleSymbol,
  GetLatestTradeSingleSymbol,
} from "../../TypescriptTypes/MarketAPI/StockPhaseTypes";
import axios from "axios";

class Stock extends AlpacaDataConfig {
  getHistoricalAuctions(param: GetHistoricalAuctions): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/stocks/auctions",
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

  getHistoricalBars(param: GetHistoricalBars): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/stocks/bars",
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
  getLatestBars(param: GetLatestBars): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/stocks/bars/latest",
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

  getConditionCodes(param: GetConditionCodes): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/stocks/meta/conditions/" + param.ticktype + "/",
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

  getExchangeCodes(): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/stocks/meta/exchanges",
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

  getHistoricalQuotes(param: GetHistoricalQuotes): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/stocks/quotes",
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
  getLatestQuotes(param: GetLatestQuotes): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/stocks/quotes/latest",
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

  getSnapshots(param: GetSnapshots): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/stocks/snapshots",
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
  getHistoricalTrades(param: GetHistoricalTrades): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/stocks/trades",
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
  getLatestTrades(param: GetLatestTrades): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/stocks/trades/latest",
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
  getHistoricalAuctionsSingleSymbol(
    param: GetHistoricalAuctionsSingleSymbol
  ): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: `/stocks/${param.symbols}/auctions`,
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
  getHistoricalBarsSingleSymbol(
    param: GetHistoricalBarsSingleSymbol
  ): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: `/stocks/${param.symbols}/bars`,
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
  getLatestBarSingleSymbol(param: GetLatestBarSingleSymbol): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: `/stocks/${param.symbols}/bars/latest`,
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
  getHistoricalQuotesSingleSymbol(param: GetHistoricalQuotesSingleSymbol) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: `/stocks/${param.symbols}/quotes`,
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
  getLatestQuoteSingleSymbol(
    param: GetLatestQuoteSingleSymbol
  ): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: `/stocks/${param.symbols}/quotes/latest`,
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

  getSnapshotSingleSymbol(param: GetSnapshotSingleSymbol): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: `/stocks/${param.symbols}/snapshot`,
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
  getHistoricalTradesSingleSymbol(
    param: GetHistoricalTradesSingleSymbol
  ): Promise<object> {
    try {
      return axios.request(
        this.httpConfig.httpRequestConfig({
          url: `stocks/${param.symbols}/trades`,
          version: "v2",
          method: "GET",
          params: param,
        })
      );
    } catch (error) {
      throw error;
    }
  }

  getLatestTradeSingleSymbol(
    param: GetLatestTradeSingleSymbol
  ): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: `/stocks/${param.symbols}/trades/latest`,
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
export default Stock;

// getConditionCodes, getHistoricalAuctionsSingleSymbol, getHistoricalBarsSingleSymbol, getLatestBarSingleSymbol, getHistoricalQuotesSingleSymbol getLatestTradeSingleSymbol
