import { l } from "@zufan_devops/console";
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
import axios from "axios";
import {
  CreateWatchlist,
  GetWatchlistbyID,
  UpdateWatchlistById,
  AddAssettoWatchlist,
  DeleteWatchlistById,
  GetWatchlistbyName,
  UpdateWatchlistByName,
  AddAssettoWatchlistByName,
  DeleteWatchlistByName,
  DeleteSymbolfromWatchlist,
} from "../../TypescriptTypes/InputTypes";

class Watchlists extends AlpacaConfig {
  getAllWatchlists() {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists",
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
  createWatchlist(data: CreateWatchlist) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists",
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
  getWatchlistbyID(id: GetWatchlistbyID) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists/" + id,
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
  updateWatchlistById(id: UpdateWatchlistById) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists/" + id.watchlist_id,
            method: "put",
            version: "v2",
            data: {
              name: id.name,
              symbols: id.symbols,
            },
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }
  addAssettoWatchlist(id: AddAssettoWatchlist) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists/" + id.watchlist_id + "/assets",
            method: "post",
            version: "v2",
            data: {
              symbols: id.symbols,
            },
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }
  deleteWatchlistById(id: DeleteWatchlistById) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists/" + id.watchlist_id,
            method: "delete",
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
  getWatchlistbyName(name: GetWatchlistbyName) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists?by_name?name=" + name.name,
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
  updateWatchlistByName(name: UpdateWatchlistByName) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists?by_name?name=" + name.currentName,
            method: "put",
            version: "v2",
            data: {
              name: name.newName,
              symbols: name.symbols,
            },
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }
  addAssettoWatchlistByName(name: AddAssettoWatchlistByName) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists?by_name?name=" + name.name,
            method: "post",
            version: "v2",
            data: {
              symbols: name.symbols,
            },
          })
        )
        .then((res) => {
          if (res.status === 200) return res.data;
        });
    } catch (error) {
      throw error;
    }
  }
  deleteWatchlistByName(name: DeleteWatchlistByName) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists?by_name?name=" + name.name,
            method: "delete",
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
  deleteSymbolfromWatchlist(id: DeleteSymbolfromWatchlist) {
    try {
      return axios
        .request(
          this.httpConfig.httpRequestConfig({
            url: "/watchlists/" + id.watchlist_id + "/assets/" + id.symbol,
            method: "delete",
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
}
export default Watchlists;
