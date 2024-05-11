import axios from "axios";
import {
  GetAssetsParams,
  GetAnAssetByIDorSymbol,
  GetOptionContracts,
  GetOptionContractByIDorSymbol,
} from "../../TypescriptTypes/InputTypes"; // input types
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
export default class Assets extends AlpacaConfig {
  getAssets(params?: GetAssetsParams) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/assets",
            version: "v2",
            method: "get",
            params: params,
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }

  getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol): Promise<object> {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/assets",
            version: "v2",
            method: "get",
            params: params,
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }

  getOptionContracts(param?: GetOptionContracts) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/options/contracts",
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
  getOptionContractByIDorSymbol(param: GetOptionContractByIDorSymbol) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/options/contracts/" + param.symbol_or_asset_id,
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

// super - allows access to the parent class
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it
