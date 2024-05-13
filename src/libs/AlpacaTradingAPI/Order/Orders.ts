import axios from "axios";
import {
  CreateAnOrder,
  GetAllOrders,
  GetOrderById,
  ReplaceOrderbyID,
  DeleteOrderbyID,
} from "../../TypescriptTypes/TradingAPI"; // input types
import AlpacaConfig from "../../AlpacaConfig/AlpacaConfig";
import timeFormatByKey from "../../dataTime/time";
export default class Orders extends AlpacaConfig {
  createAnOrder(param: CreateAnOrder) {
    try {
      const configs = this.httpConfig.httpRequestConfig({
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
      const configs = this.httpConfig.httpRequestConfig({
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
      const configs = this.httpConfig.httpRequestConfig({
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
      const configs = this.httpConfig.httpRequestConfig({
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
      const configs = this.httpConfig.httpRequestConfig({
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
      const configs = this.httpConfig.httpRequestConfig({
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

// super - allows access to the parent class
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it
