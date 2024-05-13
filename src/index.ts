import axios from "axios";
import {
  Authentication,
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
  CloseAllPositions,
  GetOpenPosition,
  ClosePosition,
  ExerciseOptionPosition,
  GetAccountPortfolioHistory,
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
  AccountConfigurations,
  GetMarketCalendarinfo,
  GetRetrieveCryptoFundingWallets,
  RequestNewWithdrawal,
  GetRetrieveCryptoFundingTransfer,
  RequestNewWhitelistedAddress,
  DeleteWhitelistedAddress,
  GetEstimatedGasFee,
} from "./libs/TypescriptTypes/InputTypes";
import Account from "./libs/Alpaca/Account/Account";
import Assets from "./libs/Alpaca/Assets/Assets";
import CorporateActions from "./libs/Alpaca/CorporateActions/CorporateActions";
import Orders from "./libs/Alpaca/Order/Orders";
import Positions from "./libs/Alpaca/Positions/Positions";
import PortfolioHistory from "./libs/Alpaca/PortfolioHistory/PortfolioHistory";
import Watchlists from "./libs/Alpaca/Watchlists/Watchlists";
import AccountConfiguration from "./libs/Alpaca/AccountConfiguration/AccountConfiguration";
import Clock from "./libs/Alpaca/Clock/Clock";
import Calendar from "./libs/Alpaca/Calendar/Calendar";
import CryptoFunding from "./libs/Alpaca/CryptoFunding/CryptoFunding";

class Alpaca {
  constructor(private readonly auth: Authentication) {
    this.auth = auth;
  }
  getAccount(): Promise<object> {
    return new Account(this.auth).getAccount();
  }
  getAssets(params?: GetAssetsParams): Promise<object> {
    return new Assets(this.auth).getAssets(params);
  }
  getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol): Promise<object> {
    return new Assets(this.auth).getAnAssetByIDorSymbol(params);
  }
  getOptionContracts(param?: GetOptionContracts): Promise<object> {
    return new Assets(this.auth).getOptionContracts(param);
  }
  getOptionContractByIDorSymbol(
    param: GetOptionContractByIDorSymbol
  ): Promise<object> {
    return new Assets(this.auth).getOptionContractByIDorSymbol(param);
  }
  getSpecificAnnouncement(id: string): Promise<object> {
    return new CorporateActions(this.auth).getSpecificAnnouncement(id);
  }
  getAnnouncements(param: GetAnnouncements): Promise<object> {
    return new CorporateActions(this.auth).getAnnouncements(param);
  }
  createAnOrder(param: CreateAnOrder): Promise<object> {
    return new Orders(this.auth).createAnOrder(param);
  }
  getAllOrders(param: GetAllOrders): Promise<object> {
    return new Orders(this.auth).getAllOrders(param);
  }
  deleteAllOrders(): Promise<object> {
    return new Orders(this.auth).deleteAllOrders();
  }
  getOrderById(param: GetOrderById): Promise<object> {
    return new Orders(this.auth).getOrderById(param);
  }
  replaceOrderbyID(param: ReplaceOrderbyID): Promise<object> {
    return new Orders(this.auth).replaceOrderbyID(param);
  }
  deleteOrderbyID(param: DeleteOrderbyID): Promise<object> {
    return new Orders(this.auth).deleteOrderbyID(param);
  }
  getAllOpenPositions(): Promise<object> {
    return new Positions(this.auth).getAllOpenPositions();
  }
  closeAllPositions(param: CloseAllPositions): Promise<object> {
    return new Positions(this.auth).closeAllPositions(param);
  }
  getOpenPosition(param: GetOpenPosition): Promise<object> {
    return new Positions(this.auth).getOpenPosition(param);
  }
  closePosition(param: ClosePosition): Promise<object> {
    return new Positions(this.auth).closePosition(param);
  }
  exerciseOptionPosition(param: ExerciseOptionPosition): Promise<object> {
    return new Positions(this.auth).exerciseOptionPosition(param);
  }
  getPortfolioHistory(param: GetAccountPortfolioHistory) {
    return new PortfolioHistory(this.auth).getAccountPortfolioHistory(param);
  }

  // Watchlists
  getAllWatchlists(): Promise<object> {
    return new Watchlists(this.auth).getAllWatchlists();
  }
  createWatchlist(data: CreateWatchlist): Promise<object> {
    return new Watchlists(this.auth).createWatchlist(data);
  }
  getWatchlistbyID(id: GetWatchlistbyID): Promise<object> {
    return new Watchlists(this.auth).getWatchlistbyID(id);
  }
  updateWatchlistById(id: UpdateWatchlistById): Promise<object> {
    return new Watchlists(this.auth).updateWatchlistById(id);
  }
  addAssettoWatchlist(id: AddAssettoWatchlist): Promise<object> {
    return new Watchlists(this.auth).addAssettoWatchlist(id);
  }
  deleteWatchlistById(id: DeleteWatchlistById): Promise<object> {
    return new Watchlists(this.auth).deleteWatchlistById(id);
  }
  getWatchlistbyName(name: GetWatchlistbyName): Promise<object> {
    return new Watchlists(this.auth).getWatchlistbyName(name);
  }
  updateWatchlistByName(name: UpdateWatchlistByName): Promise<object> {
    return new Watchlists(this.auth).updateWatchlistByName(name);
  }
  addAssettoWatchlistByName(name: AddAssettoWatchlistByName): Promise<object> {
    return new Watchlists(this.auth).addAssettoWatchlistByName(name);
  }
  deleteWatchlistByName(name: DeleteWatchlistByName): Promise<object> {
    return new Watchlists(this.auth).deleteWatchlistByName(name);
  }
  deleteSymbolfromWatchlist(id: DeleteSymbolfromWatchlist): Promise<object> {
    return new Watchlists(this.auth).deleteSymbolfromWatchlist(id);
  }
  getAccountConfigurations(): Promise<object> {
    return new AccountConfiguration(this.auth).getAccountConfigurations();
  }
  updateAccountConfigurations(data: AccountConfigurations): Promise<object> {
    return new AccountConfiguration(this.auth).updateAccountConfigurations(
      data
    );
  }
  getMarketCalendarinfo(param?: GetMarketCalendarinfo): Promise<object> {
    return new Calendar(this.auth).getMarketCalendarinfo(param);
  }
  clockAndCalendar(): Promise<object> {
    return new Clock(this.auth).getMarketClockInfo();
  }
  // CryptoFunding
  getRetrieveCryptoFundingWallets(param: GetRetrieveCryptoFundingWallets) {
    return new CryptoFunding(this.auth).getRetrieveCryptoFundingWallets(param);
  }
  getRetrieveCryptoFundingTransfer() {
    return new CryptoFunding(this.auth).getRetrieveCryptoFundingTransfer();
  }
  requestNewWithdrawal(data: RequestNewWithdrawal) {
    return new CryptoFunding(this.auth).requestNewWithdrawal(data);
  }
  getRetrieveSingleCryptoFundingTransfer(
    queryParams: GetRetrieveCryptoFundingTransfer
  ) {
    return new CryptoFunding(this.auth).getRetrieveSingleCryptoFundingTransfer(
      queryParams
    );
  }
  getArrayofWhitelistedAddresses(queryParams: GetRetrieveCryptoFundingWallets) {
    return new CryptoFunding(this.auth).getArrayofWhitelistedAddresses(
      queryParams
    );
  }
  requestNewWhitelistedAddress(data: RequestNewWhitelistedAddress) {
    return new CryptoFunding(this.auth).requestNewWhitelistedAddress(data);
  }
  deleteWhitelistedAddress(data: DeleteWhitelistedAddress) {
    return new CryptoFunding(this.auth).deleteWhitelistedAddress(data);
  }
  getEstimatedGasFee(queryParams: GetEstimatedGasFee) {
    return new CryptoFunding(this.auth).getEstimatedGasFee(queryParams);
  }
}

export default Alpaca;
