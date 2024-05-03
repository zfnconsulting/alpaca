import axios from "axios";

import { Authentication, AxiosConfig, GetAssetsParams } from "./InputTypes"; // input types
import { GetAccount } from "./ReturnTypes"; // return types

class Alpaca {
  constructor(protected readonly config: Authentication) {
    this.config = config;
  }
  #axiosConfig = (config: AxiosConfig) => ({
    method: config.method,
    baseURL: "https://paper-api.alpaca.markets/" + config.version,
    url: config.url,
    params: config.params,
    headers: {
      accept: "application/json",
      "APCA-API-KEY-ID": this.config["keyId"],
      "APCA-API-SECRET-KEY": this.config["secretKey"],
    },
  });

  getAccount(): Promise<GetAccount> {
    try {
      return axios
        .request(
          this.#axiosConfig({ url: "/account", version: "v2", method: "get" })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }

  getAssets(params: GetAssetsParams) {
    try {
      return axios
        .request(
          this.#axiosConfig({
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
}

export default Alpaca;
