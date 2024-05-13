import axios from "axios";
import {
  CloseAllPositions,
  GetOpenPosition,
  ClosePosition,
  ExerciseOptionPosition,
} from "../../TypescriptTypes/TradingAPI"; // input types
import AlpacaConfig from "../../AlpacaConfig/AlpacaConfig";
export default class Positions extends AlpacaConfig {
  getAllOpenPositions() {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/positions",
            version: "v2",
            method: "GET",
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }
  closeAllPositions(param: CloseAllPositions) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/positions",
            version: "v2",
            method: "DELETE",
            params: param,
          })
        )
        .then((res) => {
          if (res.status === 207) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }
  getOpenPosition(param: GetOpenPosition) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/positions",
            version: "v2",
            method: "GET",
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
  closePosition(param: ClosePosition) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/positions",
            version: "v2",
            method: "DELETE",
            params: param,
          })
        )
        .then((res) => {
          if (res.status === 207) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }
  exerciseOptionPosition(param: ExerciseOptionPosition) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/positions",
            version: "v2",
            method: "POST",
            params: param,
          })
        )
        .then((res) => {
          if (res.status === 207) return res.data;
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
