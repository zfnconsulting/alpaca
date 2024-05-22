// TradingAPI Interface Imports
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
} from "./libs/TypescriptTypes/TradingAPI";

// MarketAPI Interface Imports
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
} from "./libs/TypescriptTypes/MarketAPI/StockPhaseTypes";

// TradingAPI
import Account from "./libs/AlpacaTradingAPI/Account/Account";
// import Assets from "./libs/AlpacaTradingAPI/Assets/Assets";
// import CorporateActions from "./libs/AlpacaTradingAPI/CorporateActions/CorporateActions";
// import Orders from "./libs/AlpacaTradingAPI/Order/Orders";
// import Positions from "./libs/AlpacaTradingAPI/Positions/Positions";
// import PortfolioHistory from "./libs/AlpacaTradingAPI/PortfolioHistory/PortfolioHistory";
// import Watchlists from "./libs/AlpacaTradingAPI/Watchlists/Watchlists";
// import AccountConfiguration from "./libs/AlpacaTradingAPI/AccountConfiguration/AccountConfiguration";
// import Clock from "./libs/AlpacaTradingAPI/Clock/Clock";
// import Calendar from "./libs/AlpacaTradingAPI/Calendar/Calendar";
// import CryptoFunding from "./libs/AlpacaTradingAPI/CryptoFunding/CryptoFunding";

// MarketData
// import Stock from "./libs/MarketData/Stock/Stock";
class Alpaca {
  constructor(private readonly auth: Authentication) {
    this.auth = auth;
  }
  getAccount() {
    return new Account(this.auth).getAccount();
  }
  // getAccount(): Promise<object> {
  //   return new Account(this.auth).getAccount();
  // }
  // getAssets(params?: GetAssetsParams): Promise<object> {
  //   return new Assets(this.auth).getAssets(params);
  // }
  // getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol): Promise<object> {
  //   return new Assets(this.auth).getAnAssetByIDorSymbol(params);
  // }
  // getOptionContracts(param?: GetOptionContracts): Promise<object> {
  //   return new Assets(this.auth).getOptionContracts(param);
  // }
  // getOptionContractByIDorSymbol(
  //   param: GetOptionContractByIDorSymbol
  // ): Promise<object> {
  //   return new Assets(this.auth).getOptionContractByIDorSymbol(param);
  // }
  // getSpecificAnnouncement(id: string): Promise<object> {
  //   return new CorporateActions(this.auth).getSpecificAnnouncement(id);
  // }
  // getAnnouncements(param: GetAnnouncements): Promise<object> {
  //   return new CorporateActions(this.auth).getAnnouncements(param);
  // }
  // createAnOrder(param: CreateAnOrder): Promise<object> {
  //   return new Orders(this.auth).createAnOrder(param);
  // }
  // getAllOrders(param: GetAllOrders): Promise<object> {
  //   return new Orders(this.auth).getAllOrders(param);
  // }
  // deleteAllOrders(): Promise<object> {
  //   return new Orders(this.auth).deleteAllOrders();
  // }
  // getOrderById(param: GetOrderById): Promise<object> {
  //   return new Orders(this.auth).getOrderById(param);
  // }
  // replaceOrderbyID(param: ReplaceOrderbyID): Promise<object> {
  //   return new Orders(this.auth).replaceOrderbyID(param);
  // }
  // deleteOrderbyID(param: DeleteOrderbyID): Promise<object> {
  //   return new Orders(this.auth).deleteOrderbyID(param);
  // }
  // getAllOpenPositions(): Promise<object> {
  //   return new Positions(this.auth).getAllOpenPositions();
  // }
  // closeAllPositions(param: CloseAllPositions): Promise<object> {
  //   return new Positions(this.auth).closeAllPositions(param);
  // }
  // getOpenPosition(param: GetOpenPosition): Promise<object> {
  //   return new Positions(this.auth).getOpenPosition(param);
  // }
  // closePosition(param: ClosePosition): Promise<object> {
  //   return new Positions(this.auth).closePosition(param);
  // }
  // exerciseOptionPosition(param: ExerciseOptionPosition): Promise<object> {
  //   return new Positions(this.auth).exerciseOptionPosition(param);
  // }
  // getPortfolioHistory(param: GetAccountPortfolioHistory) {
  //   return new PortfolioHistory(this.auth).getAccountPortfolioHistory(param);
  // }
  // getAllWatchlists(): Promise<object> {
  //   return new Watchlists(this.auth).getAllWatchlists();
  // }
  // createWatchlist(data: CreateWatchlist): Promise<object> {
  //   return new Watchlists(this.auth).createWatchlist(data);
  // }
  // getWatchlistbyID(id: GetWatchlistbyID): Promise<object> {
  //   return new Watchlists(this.auth).getWatchlistbyID(id);
  // }
  // updateWatchlistById(id: UpdateWatchlistById): Promise<object> {
  //   return new Watchlists(this.auth).updateWatchlistById(id);
  // }
  // addAssettoWatchlist(id: AddAssettoWatchlist): Promise<object> {
  //   return new Watchlists(this.auth).addAssettoWatchlist(id);
  // }
  // deleteWatchlistById(id: DeleteWatchlistById): Promise<object> {
  //   return new Watchlists(this.auth).deleteWatchlistById(id);
  // }
  // getWatchlistbyName(name: GetWatchlistbyName): Promise<object> {
  //   return new Watchlists(this.auth).getWatchlistbyName(name);
  // }
  // updateWatchlistByName(name: UpdateWatchlistByName): Promise<object> {
  //   return new Watchlists(this.auth).updateWatchlistByName(name);
  // }
  // addAssettoWatchlistByName(name: AddAssettoWatchlistByName): Promise<object> {
  //   return new Watchlists(this.auth).addAssettoWatchlistByName(name);
  // }
  // deleteWatchlistByName(name: DeleteWatchlistByName): Promise<object> {
  //   return new Watchlists(this.auth).deleteWatchlistByName(name);
  // }
  // deleteSymbolfromWatchlist(id: DeleteSymbolfromWatchlist): Promise<object> {
  //   return new Watchlists(this.auth).deleteSymbolfromWatchlist(id);
  // }
  // getAccountConfigurations(): Promise<object> {
  //   return new AccountConfiguration(this.auth).getAccountConfigurations();
  // }
  // updateAccountConfigurations(data: AccountConfigurations): Promise<object> {
  //   return new AccountConfiguration(this.auth).updateAccountConfigurations(
  //     data
  //   );
  // }
  // getMarketCalendarinfo(param?: GetMarketCalendarinfo): Promise<object> {
  //   return new Calendar(this.auth).getMarketCalendarinfo(param);
  // }
  // clockAndCalendar(): Promise<object> {
  //   return new Clock(this.auth).getMarketClockInfo();
  // }
  // // CryptoFunding
  // getRetrieveCryptoFundingWallets(param: GetRetrieveCryptoFundingWallets) {
  //   return new CryptoFunding(this.auth).getRetrieveCryptoFundingWallets(param);
  // }
  // getRetrieveCryptoFundingTransfer() {
  //   return new CryptoFunding(this.auth).getRetrieveCryptoFundingTransfer();
  // }
  // requestNewWithdrawal(data: RequestNewWithdrawal) {
  //   return new CryptoFunding(this.auth).requestNewWithdrawal(data);
  // }
  // getRetrieveSingleCryptoFundingTransfer(
  //   queryParams: GetRetrieveCryptoFundingTransfer
  // ) {
  //   return new CryptoFunding(this.auth).getRetrieveSingleCryptoFundingTransfer(
  //     queryParams
  //   );
  // }
  // getArrayofWhitelistedAddresses(queryParams: GetRetrieveCryptoFundingWallets) {
  //   return new CryptoFunding(this.auth).getArrayofWhitelistedAddresses(
  //     queryParams
  //   );
  // }
  // requestNewWhitelistedAddress(data: RequestNewWhitelistedAddress) {
  //   return new CryptoFunding(this.auth).requestNewWhitelistedAddress(data);
  // }
  // deleteWhitelistedAddress(data: DeleteWhitelistedAddress) {
  //   return new CryptoFunding(this.auth).deleteWhitelistedAddress(data);
  // }
  // getEstimatedGasFee(queryParams: GetEstimatedGasFee) {
  //   return new CryptoFunding(this.auth).getEstimatedGasFee(queryParams);
  // }

  // getHistoricalAuctions(queryParams: GetHistoricalAuctions) {
  //   return new Stock(this.auth).getHistoricalAuctions(queryParams);
  // }
  // getHistoricalBars(queryParams: GetHistoricalBars) {
  //   return new Stock(this.auth).getHistoricalBars(queryParams);
  // }
  // getLatestBars(queryParams: GetLatestBars) {
  //   return new Stock(this.auth).getLatestBars(queryParams);
  // }
  // getConditionCodes(queryParams: GetConditionCodes) {
  //   return new Stock(this.auth).getConditionCodes(queryParams);
  // }

  // getExchangeCodes() {
  //   return new Stock(this.auth).getExchangeCodes();
  // }
  // getHistoricalQuotes(param: GetHistoricalQuotes) {
  //   return new Stock(this.auth).getHistoricalQuotes(param);
  // }
  // getLatestQuotes(param: GetLatestQuotes) {
  //   return new Stock(this.auth).getLatestQuotes(param);
  // }
  // getSnapshots(param: GetSnapshots) {
  //   return new Stock(this.auth).getSnapshots(param);
  // }
  // getHistoricalTrades(param: GetHistoricalTrades) {
  //   return new Stock(this.auth).getHistoricalTrades(param);
  // }
  // getLatestTrades(param: GetLatestTrades) {
  //   return new Stock(this.auth).getLatestTrades(param);
  // }
  // getHistoricalAuctionsSingleSymbol(param: GetHistoricalAuctionsSingleSymbol) {
  //   return new Stock(this.auth).getHistoricalAuctionsSingleSymbol(param);
  // }
  // getHistoricalBarsSingleSymbol(param: GetHistoricalBarsSingleSymbol) {
  //   return new Stock(this.auth).getHistoricalBarsSingleSymbol(param);
  // }
  // getLatestBarSingleSymbol(param: GetLatestBarSingleSymbol) {
  //   return new Stock(this.auth).getLatestBarSingleSymbol(param);
  // }
  // getHistoricalQuotesSingleSymbol(param: GetHistoricalQuotesSingleSymbol) {
  //   return new Stock(this.auth).getHistoricalQuotesSingleSymbol(param);
  // }
  // getLatestQuoteSingleSymbol(param: GetLatestQuoteSingleSymbol) {
  //   return new Stock(this.auth).getLatestQuoteSingleSymbol(param);
  // }
  // getSnapshotSingleSymbol(param: GetSnapshotSingleSymbol) {
  //   return new Stock(this.auth).getSnapshotSingleSymbol(param);
  // }
  // getHistoricalTradesSingleSymbol(param: GetHistoricalTradesSingleSymbol) {
  //   return new Stock(this.auth).getHistoricalTradesSingleSymbol(param);
  // }
  // getLatestTradeSingleSymbol(param: GetLatestTradeSingleSymbol) {
  //   return new Stock(this.auth).getLatestTradeSingleSymbol(param);
  // }
}

export default Alpaca;
