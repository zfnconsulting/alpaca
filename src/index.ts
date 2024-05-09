import axios from "axios";
import {
  Authentication,
  AxiosConfig,
  GetAssetsParams,
  GetAnAssetByIDorSymbol,
  GetOptionContracts,
  GetOptionContractByIDorSymbol,
  GetAnnouncements,
  CreateAnOrder,
  GetAllOrders,
  GetOrderById,
  ReplaceOrderbyID,
  DeleteOrderbyID,
} from "./InputTypes"; // input types
import { GetAccount } from "./ReturnTypes"; // return types
import timeFormatByKey from "./libs/dataTime/time";

type ConfigurationTyps = {
  method: string;
  baseURL: string;
  url: string;
  data?: object;
  params?: object;
  headers: object;
};
class Alpaca {
  constructor(protected readonly auth: Authentication) {
    this.auth = auth;
  }
  #axiosConfig(config: AxiosConfig) {
    const configuration: ConfigurationTyps = {
      method: config.method,
      baseURL: "https://paper-api.alpaca.markets/" + config.version,
      url: config.url,
      headers: {
        accept: "application/json",
        "APCA-API-KEY-ID": this.auth["keyId"],
        "APCA-API-SECRET-KEY": this.auth["secretKey"],
      },
    };
    if (config.method.toLocaleLowerCase() === "get") {
      configuration["params"] = config.params;
      return configuration;
    }

    if (config.data) {
      configuration["data"] = config.data;
    }
    return configuration;
  }
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

  getAssets(params?: GetAssetsParams) {
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

  getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol): Promise<object> {
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

  getOptionContracts(param?: GetOptionContracts) {
    try {
      return axios
        .request(
          this.#axiosConfig({
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
          this.#axiosConfig({
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

  getSpecificAnnouncement(id: string) {
    try {
      return axios
        .request(
          this.#axiosConfig({
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
          this.#axiosConfig({
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
  createAnOrder(param: CreateAnOrder) {
    try {
      const configs = this.#axiosConfig({
        url: "/orders",
        version: "v2",
        method: "POST",
        data: param,
      });
      return axios.request({ ...configs }).then((res) => {
        if (res.status === 200) return res.data;
      });
    } catch (error) {
      throw error;
    }
  }
  getAllOrders(param: GetAllOrders) {
    try {
      const paramKeys = ["after", "until"];
      const timeformated = timeFormatByKey(param, paramKeys);
      const configs = this.#axiosConfig({
        url: "/orders",
        version: "v2",
        method: "GET",
        params: timeformated,
      });

      return axios.request({ ...configs }).then((res) => {
        if (res.status === 200) return res.data;
      });
    } catch (error) {
      throw error;
    }
  }
  deleteAllOrders() {
    try {
      const configs = this.#axiosConfig({
        url: "/orders",
        version: "v2",
        method: "DELETE",
      });
      return axios.request({ ...configs }).then((res) => {
        if (res.status === 207) return res.data;
      });
    } catch (error) {
      throw error;
    }
  }
  getOrderById(param: GetOrderById) {
    try {
      const configs = this.#axiosConfig({
        url: "/orders",
        version: "v2",
        method: "GET",
        params: param,
      });
      return axios.request(configs).then((res) => {
        if (res.status === 200) return res.data;
      });
    } catch (error) {
      throw error;
    }
  }

  replaceOrderbyID(param: ReplaceOrderbyID) {
    try {
      const configs = this.#axiosConfig({
        url: "/orders/" + param.order_id,
        version: "v2",
        method: "PATCH",
        data: param,
      });
      return axios.request(configs).then((res) => {
        if (res.status === 200) return res.data;
      });
    } catch (error) {
      throw error;
    }
  }
  deleteOrderbyID(param: DeleteOrderbyID) {
    try {
      const configs = this.#axiosConfig({
        url: "/orders/" + param.order_id,
        version: "v2",
        method: "DELETE",
      });
      return axios.request(configs).then((res) => {
        if (res.status === 200) return res.data;
      });
    } catch (error) {
      throw error;
    }
  }
}

export default Alpaca;
