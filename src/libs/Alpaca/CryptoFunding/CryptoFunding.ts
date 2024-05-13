import { l } from "@zufan_devops/console";
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
import axios from "axios";
import {
  GetRetrieveCryptoFundingWallets,
  RequestNewWithdrawal,
  GetRetrieveCryptoFundingTransfer,
  RequestNewWhitelistedAddress,
  DeleteWhitelistedAddress,
  GetEstimatedGasFee,
} from "../../TypescriptTypes/TradingAPI";
class CryptoFunding extends AlpacaConfig {
  getRetrieveCryptoFundingWallets(
    queryParams: GetRetrieveCryptoFundingWallets
  ) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/wallets",
            method: "get",
            version: "v2",
            params: queryParams,
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }
  getRetrieveCryptoFundingTransfer() {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "wallets/transfers/",
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

  requestNewWithdrawal(data: RequestNewWithdrawal) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/wallets/transfers/",
            method: "post",
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

  getRetrieveSingleCryptoFundingTransfer(
    queryParams: GetRetrieveCryptoFundingTransfer
  ) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/wallets/transfers/",
            method: "get",
            version: "v2",
            params: queryParams,
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }

  getArrayofWhitelistedAddresses(queryParams: GetRetrieveCryptoFundingWallets) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/wallets/whitelists",
            method: "get",
            version: "v2",
            params: queryParams,
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }

  requestNewWhitelistedAddress(queryParams: RequestNewWhitelistedAddress) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/wallets/whitelists",
            method: "post",
            version: "v2",
            params: queryParams,
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }

  deleteWhitelistedAddress(queryParams: DeleteWhitelistedAddress) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "wallets/whitelists/",
            method: "delete",
            version: "v2",
            params: queryParams,
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }

  getEstimatedGasFee(queryParams: GetEstimatedGasFee) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/wallets/fees/estimate",
            method: "get",
            version: "v2",
            params: queryParams,
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
export default CryptoFunding;
