# Alpaca Class Documentation

## Node.js library for Alpaca Trade API

## Overview

This is my version of Alpaca's Trading API Documentation. I found the current Alpaca SDK very lacking of many features. This documentation is still a working progress.

The Alpaca Trading API provides a comprehensive set of endpoints for managing trading activities, account information, market data, and more. It is designed for developers looking to create automated trading systems or integrate Alpaca's functionalities into their applications.

## [Support This Project](https://buymeacoffee.com/zufans)

## API Documentation

The REST API documentation can be found in [https://docs.markets](https://docs.alpaca.markets/). For detailed information about an endpoint, please consult the REST API docs. Documentation specific to this library can be found below.

## Table of Contents

- [Usage](#installation-and-usage)
- [Constructor](#constructor)
- [Methods](#methods)
  - [getAccount()](#getaccount)
  - [getAssets(params?: GetAssetsParams)](#getassetsparams-getassetsparams)
  - [getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol)](#getanassetbyidorsymbolparam-getanassetbyidorsymbol)
  - [getOptionContracts(param?: GetOptionContracts)](#getoptioncontractsparam-getoptioncontracts)
  - [getOptionContractByIDorSymbol(param: GetOptionContractByIDorSymbol)](#getoptioncontractbyidorsymbolparam-getoptioncontractbyidorsymbol)
  - [getSpecificAnnouncement(id: string)](#getspecificannouncementid-string)
  - [getAnnouncements(param: GetAnnouncements)](#getannouncementsparam-getannouncements)
  - [createAnOrder(param: CreateAnOrder)](#createanorderparam-createanorder)
  - [getAllOrders(param: GetAllOrders)](#getallordersparam-getallorders)
  - [deleteAllOrders()](#deleteallorders)
  - [getOrderById(param: GetOrderById)](#getorderbyidparam-getorderbyid)
  - [replaceOrderbyID(param: ReplaceOrderbyID)](#replaceorderbyidparam-replaceorderbyid)
  - [deleteOrderbyID(param: DeleteOrderbyID)](#deleteorderbyidparam-deleteorderbyid)
  - [getAllOpenPositions()](#getallopenpositions)
  - [closeAllPositions(param: CloseAllPositions)](#closeallpositionsparam-closeallpositions)
  - [getOpenPosition(param: GetOpenPosition)](#getopenpositionparam-getopenposition)
  - [closePosition(param: ClosePosition)](#closepositionparam-closeposition)
  - [exerciseOptionPosition(param: ExerciseOptionPosition)](#exerciseoptionpositionparam-exerciseoptionposition)
  - [getPortfolioHistory(param: GetAccountPortfolioHistory)](#getportfoliohistoryparam-getaccountportfoliohistory)
  - [getAllWatchlists()](#getallwatchlists)
  - [createWatchlist(data: CreateWatchlist)](#createwatchlistdata-createwatchlist)
  - [getWatchlistbyID(id: GetWatchlistbyID)](#getwatchlistbyidid-getwatchlistbyid)
  - [updateWatchlistById(id: UpdateWatchlistById)](#updatewatchlistbyidid-updatewatchlistbyid)
  - [addAssettoWatchlist(id: AddAssettoWatchlist)](#addassettowatchlistid-addassetto)
  - [deleteWatchlistById(id: DeleteWatchlistById)](#deletewatchlistbyidid-deletewatchlistbyid)
  - [getWatchlistbyName(name: GetWatchlistbyName)](#getwatchlistbynamename-getwatchlistbyname)
  - [updateWatchlistByName(name: UpdateWatchlistByName)](#updatewatchlistbynamename-updatewatchlistbyname)
  - [addAssettoWatchlistByName(name: AddAssettoWatchlistByName)](#addassettowatchlistbynamename-addassetto)
  - [deleteWatchlistByName(name: DeleteWatchlistByName)](#deletewatchlistbynamename-deletewatchlistbyname)
  - [deleteSymbolfromWatchlist(id: DeleteSymbolfromWatchlist)](#deletesymbolfromwatchlistid-deletesymbolfromwatchlist)
  - [getAccountConfigurations()](#getaccountconfigurations)
  - [updateAccountConfigurations(data: AccountConfigurations)](#updateaccountconfigurationsdata-accountconfigurations)
  - [getMarketCalendarinfo(param?: GetMarketCalendarinfo)](#getmarketcalendarinfoparam-getmarketcalendarinfo)
  - [ClockAndCalendar()](#clockandcalendar)
  - [getRetrieveCryptoFundingWallets(param: GetRetrieveCryptoFundingWallets)](#getretrievecryptofundingwalletsparam-getretrievecryptofundingwallets)
  - [getRetrieveCryptoFundingTransfer()](#getretrievecryptofundingtransfer)
  - [requestNewWithdrawal(data: RequestNewWithdrawal)](#requestnewwithdrawaldata-requestnewwithdrawal)
  - [getRetrieveSingleCryptoFundingTransfer(queryParams: GetRetrieveCryptoFundingTransfer)](#getretrievesinglecryptofundingtransferqueryparams-getretrievecryptofundingtransfer)
  - [getArrayofWhitelistedAddresses(queryParams: GetRetrieveCryptoFundingWallets)](#getarrayofwhitelistedaddressesqueryparams-getretrievecryptofundingwallets)
  - [requestNewWhitelistedAddress(data: RequestNewWhitelistedAddress)](#requestnewwhitelistedaddressdata-requestnewwhitelistedaddress)
  - [deleteWhitelistedAddress(data: DeleteWhitelistedAddress)](#deletewhitelistedaddressdata-deletewhitelistedaddress)
  - [getEstimatedGasFee(queryParams: GetEstimatedGasFee)](#getestimatedgasfeequeryparams-getestimatedgasfee)
  - [getHistoricalCryptoFunding(queryParams: GetHistoricalAuctions)](#gethistoricalcryptofundingqueryparams-gethistoricalauctions)
  - [getHistoricalBars(queryParams: GetHistoricalBars)](#gethistoricalbarsqueryparams-gethistoricalbars)
  - [getLatestBars(queryParams: GetLatestBars)](#getlatestbarsqueryparams-getlatestbars)
  - [getConditionCodes(queryParams: GetConditionCodes)](#getconditioncodesqueryparams-getconditioncodes)
  - [getHistoricalQuotes(param: GetHistoricalQuotes)](#gethistoricalquotesparam-gethistoricalquotes)
  - [getLatestQuotes(param: GetLatestQuotes)](#getlatestquotesparam-getlatestquotes)
  - [getSnapshots(param: GetSnapshots)](#getsnapshotsparam-getsnapshots)
  - [getHistoricalTrades(param: GetHistoricalTrades)](#gethistoricaltradesparam-gethistoricaltrades)
  - [getLatestTrades(param: GetLatestTrades)](#getlatesttradesparam-getlatesttrades)
  - [getHistoricalAuctionsSingleSymbol(param: GetHistoricalAuctionsSingleSymbol)](#gethistoricalauctionssinglesymbolparam-gethistoricalauctionssinglesymbol)
  - [getHistoricalBarsSingleSymbol(param: GetHistoricalBarsSingleSymbol)](#gethistoricalbarssinglesymbolparam-gethistoricalbarssinglesymbol)
  - [getLatestBarSingleSymbol(param: GetLatestBarSingleSymbol)](#getlatestbarsinglesymbolparam-getlatestbarsinglesymbol)
  - [getHistoricalQuotesSingleSymbol(param: GetHistoricalQuotesSingleSymbol)](#gethistoricalquotessinglesymbolparam-gethistoricalquotessinglesymbol)
  - [getLatestQuoteSingleSymbol(param: GetLatestQuoteSingleSymbol)](#getlatestquotesinglesymbolparam-getlatestquotessinglesymbol)
  - [getSnapshotSingleSymbol(param: GetSnapshotSingleSymbol)](#getsnapshotsinglesymbolparam-getsnapshotsinglesymbol)
  - [getHistoricalTradesSingleSymbol(param: GetHistoricalTradesSingleSymbol)](#gethistoricaltradessinglesymbolparam-gethistoricaltradessinglesymbol)
  - [getLatestTradeSingleSymbol(param: GetLatestTradeSingleSymbol)](#getlatesttradesinglesymbolparam-getlatesttradesinglesymbol)

## Installation And Usage

```bash
npm install @zufans/alpaca
```

Import the package first.

```js
const Alpaca = require("@zufans/alpaca");
```

Or

```js
import Alpaca from "@zufans/alpaca";
```

## Constructor

### `constructor(auth: Authentication)`

```js
const alpaca = new Alpaca({
  keyId: "AKFZXJH121U18SHHDRFO",
  secretKey: "pnq4YHlpMF3LhfLyOvmdfLmlz6BnASrTPQIASeiU",
  paper: true,
});
```

Initializes the Alpaca class with the provided authentication credentials.

- `auth`: An object containing authentication credentials.
  - `keyId`: A string representing the API key ID.
  - `secretKey`: A string representing the API secret key.
  - `paper`: A boolean indicating whether to use the paper trading environment (`true`) or the live environment (`false`).

## Methods

### `getAccount()`

Retrieves information about the account associated with the provided authentication credentials.

### `getAssets(params?: GetAssetsParams)`

Retrieves a list of assets available for trading on the Alpaca platform.

- `params` (optional): An object containing optional parameters for filtering assets.
  - `status`: A string representing the status of assets to retrieve (e.g., 'active', 'inactive').
  - `asset_class`: A string representing the asset class (e.g., 'us_equity', 'us_option').
  - `exchange`: A string representing the exchange where the asset is traded.
  - `attributes`: A string representing additional attributes to include in the response.

### `getAnAssetByIDorSymbol(param: GetAnAssetByIDorSymbol)`

Retrieves information about a specific asset identified by its ID or symbol.

- `param`: An object containing either the ID or symbol of the asset to retrieve.
  - `symbol_or_asset_id`: A string representing either the asset ID or symbol.

### `getOptionContracts(param?: GetOptionContracts)`

Retrieves a list of option contracts available for trading.

- `param` (optional): An object containing optional parameters for filtering option contracts.

### `getOptionContractByIDorSymbol(param: GetOptionContractByIDorSymbol)`

Retrieves information about a specific option contract identified by its ID or symbol.

- `param`: An object containing either the ID or symbol of the option contract to retrieve.
  - `symbol_or_asset_id`: A string representing either the option contract ID or symbol.

### `getSpecificAnnouncement(id: string)`

Retrieves information about a specific corporate announcement.

- `id`: A string representing the ID of the announcement to retrieve.

### `getAnnouncements(param: GetAnnouncements)`

Retrieves a list of corporate announcements.

- `param`: An object containing parameters for filtering announcements.
  - `ca_types`: A string representing the types of corporate actions to retrieve.
  - `since`: A string representing the start date for filtering announcements.
  - `until`: A string representing the end date for filtering announcements.
  - `symbol` (optional): A string representing the symbol of the asset associated with the announcements.
  - `cusip` (optional): A string representing the CUSIP of the asset associated with the announcements.
  - `date_type` (optional): A string representing the date type for filtering announcements.

### `createAnOrder(param: CreateAnOrder)`

Creates a new order for trading.

- `param`: An object containing parameters for creating the order.
  - See method signature for details.

### `getAllOrders(param: GetAllOrders)`

Retrieves a list of all orders associated with the account.

- `param`: An object containing optional parameters for filtering orders.
  - See method signature for details.

### `deleteAllOrders()`

Deletes all open orders associated with the account.

### `getOrderById(param: GetOrderById)`

Retrieves information about a specific order identified by its ID.

- `param`: An object containing the ID of the order to retrieve.
  - `order_id`: A string representing the ID of the order.

### `replaceOrderbyID(param: ReplaceOrderbyID)`

Replaces an existing order with new parameters.

- `param`: An object containing parameters for replacing the order.
  - See method signature for details.

### `deleteOrderbyID(param: DeleteOrderbyID)`

Deletes a specific order identified by its ID.

- `param`: An object containing the ID of the order to delete.
  - `order_id`: A string representing the ID of the order.

### `getAllOpenPositions(): Promise<object>`

Retrieves information about all open positions associated with the account.

### `closeAllPositions(param: CloseAllPositions)`

Closes all open positions associated with the account.

- `param`: An object containing optional parameters for closing all positions.
  - `cancel_orders`: A boolean indicating whether to cancel any open orders associated with the positions before closing them. If set to `true`, open orders will be canceled; if set to `false` or omitted, open orders will not be canceled.

### `getOpenPosition(param: GetOpenPosition)`

Retrieves information about a specific open position identified by its symbol or asset ID.

- `param`: An object containing parameters for retrieving a specific open position.
  - `symbol_or_asset_id`: A string representing either the symbol or asset ID of the position to retrieve.

### `closePosition(param: ClosePosition)`

Closes a specific open position identified by its symbol or asset ID.

- `param`: An object containing parameters for closing a specific open position.
  - `symbol_or_asset_id`: A string representing either the symbol or asset ID of the position to close.
  - `qty` (optional): A string representing the quantity of the position to close. If omitted, the entire position will be closed.
  - `percentage` (optional): A string representing the percentage of the position to close. If specified, the specified percentage of the position will be closed, and `qty` will be ignored.

### `exerciseOptionPosition(param: ExerciseOptionPosition)`

Exercises an option position identified by its symbol or contract ID.

- `param`: An object containing parameters for exercising an option position.
  - `symbol_or_contract_id`: A string representing either the symbol or contract ID of the option position to exercise.

### `getPortfolioHistory(param: GetAccountPortfolioHistory)`

Retrieves historical portfolio data for the account.

- `param`: An object containing parameters for retrieving portfolio history.
  - `period` (optional): A string representing the time period for the data. Valid values include "1D" (1 day), "1W" (1 week), "1M" (1 month), and "1A" (1 year).
  - `timeframe` (optional): A string representing the timeframe for the data. Valid values include "1Min", "5Min", "15Min", "1H" (1 hour), and "1D" (1 day).
  - `intraday_reporting` (optional): A string indicating whether to report intraday data during market hours, extended hours, or continuously. Valid values are "market_hours", "extended_hours", or "continuous".
  - `start` (optional): A string representing the start date and time of the data range in RFC3339 format.
  - `end` (optional): A string representing the end date and time of the data range in RFC3339 format.
  - `pnl_reset` (optional): A string indicating how profit and loss (PnL) data should be reset. Valid values are "per_day" or "no_reset".
  - `date_end` (optional, deprecated): A string representing the end date and time of the data range in RFC3339 format. Deprecated, use `end` instead.
  - `extended_hours` (optional, deprecated): A boolean indicating whether to include extended hours data. Deprecated, use `intraday_reporting` instead.

### `getAllWatchlists()`

Retrieves a list of all watchlists associated with the account.

### `createWatchlist(data: CreateWatchlist)`

Creates a new watchlist.

- `data`: An object containing data for creating a new watchlist.
  - `name`: A string representing the name of the new watchlist.
  - `symbols` (optional): A string or an array of strings representing symbols to be added to the watchlist.

### `getWatchlistbyID(id: GetWatchlistbyID)`

Retrieves a specific watchlist by its ID.

- `id`: An object containing the ID of the watchlist to retrieve.
  - `watchlist_id`: A string representing the ID of the watchlist.

### `updateWatchlistById(id: UpdateWatchlistById)`

Updates a specific watchlist by its ID.

- `id`: An object containing the ID of the watchlist to update.
  - `watchlist_id`: A string representing the ID of the watchlist.
  - `name`: A string representing the new name for the watchlist.
  - `symbols`: A string or an array of strings representing symbols to be added to the watchlist.

### `addAssettoWatchlist(id: AddAssettoWatchlist)`

Adds assets to a specific watchlist by its ID.

- `id`: An object containing the ID of the watchlist and symbols to add assets.
  - `watchlist_id`: A string representing the ID of the watchlist.
  - `symbols` (optional): A string or an array of strings representing symbols to be added to the watchlist.

### `deleteWatchlistById(id: DeleteWatchlistById)`

Deletes a specific watchlist by its ID.

- `id`: An object containing the ID of the watchlist to delete.
  - `watchlist_id`: A string representing the ID of the watchlist.

### `getWatchlistbyName(name: GetWatchlistbyName)`

Retrieves a specific watchlist by its name.

- `name`: An object containing the name of the watchlist to retrieve.
  - `name`: A string representing the name of the watchlist.

### `updateWatchlistByName(name: UpdateWatchlistByName)`

Updates a specific watchlist by its name.

- `name`: An object containing the current name of the watchlist, the new name, and optional symbols to add.
  - `currentName`: A string representing the current name of the watchlist.
  - `newName`: A string representing the new name for the watchlist.
  - `symbols` (optional): A string or an array of strings representing symbols to be added to the watchlist.

### `addAssettoWatchlistByName(name: AddAssettoWatchlistByName)`

Adds assets to a specific watchlist by its name.

- `name`: An object containing the name of the watchlist and symbols to add assets.
  - `name`: A string representing the name of the watchlist.
  - `symbols` (optional): A string representing a symbol to be added to the watchlist.

### `deleteWatchlistByName(name: DeleteWatchlistByName)`

Deletes a specific watchlist by its name.

- `name`: An object containing the name of the watchlist to delete.
  - `name`: A string representing the name of the watchlist.

### `deleteSymbolfromWatchlist(id: DeleteSymbolfromWatchlist)`

Deletes a specific symbol from a watchlist by its ID.

- `id`: An object containing the ID of the watchlist and the symbol to delete.
  - `watchlist_id`: A string representing the ID of the watchlist.
  - `symbol`: A string representing the symbol to delete from the watchlist.

### `getAccountConfigurations()`

Retrieves account configurations.

### `updateAccountConfigurations(data: AccountConfigurations)`

Updates account configurations.

- `data`: An object containing data for updating account configurations.
  - `dtbp_check` (optional): A string representing the day trade buying power check.
  - `trade_confirm_email` (optional): A string representing the trade confirmation email.
  - `suspend_trade` (optional): A boolean indicating whether to suspend trading.
  - `fractional_trading` (optional): A boolean indicating whether fractional trading is allowed.
  - `max_margin_multiplier` (optional): A string representing the maximum margin multiplier.
  - `max_options_trading_level` (optional): A number representing the maximum options trading level.
  - `pdt_check` (optional): A string representing the pattern day trader check.
  - `ptp_no_exception_entry` (optional): A string representing the pre-trade plan no exception entry.

### `getMarketCalendarinfo(param?: GetMarketCalendarinfo)`

Retrieves market calendar information within a specified date range.

- `param` (optional): An object containing parameters for retrieving market calendar information.
  - `start` (optional): A string representing the start date of the date range in RFC3339 format.
  - `end` (optional): A string representing the end date of the date range in RFC3339 format.
  - `date_type` (optional): A string representing the type of dates to retrieve. Valid values include "trade" for trading days and "holiday" for holidays.

### `ClockAndCalendar()`

Retrieves information about the market clock and calendar.

### `getRetrieveCryptoFundingWallets(param: GetRetrieveCryptoFundingWallets)`

Retrieves information about crypto funding wallets.

- `param`: An object containing parameters for retrieving crypto funding wallets.
  - `asset` (optional): A string representing the asset symbol for which to retrieve funding wallets.

### `getRetrieveCryptoFundingTransfer()`

Retrieves information about a crypto funding transfer.

### `requestNewWithdrawal(data: RequestNewWithdrawal)`

Requests a new withdrawal of crypto funds.

- `data`: An object containing data for the new withdrawal request.
  - `amount`: A string representing the amount of crypto to withdraw.
  - `address`: A string representing the destination address for the withdrawal.
  - `asset`: A string representing the asset symbol to withdraw.

### `getRetrieveSingleCryptoFundingTransfer(queryParams: GetRetrieveCryptoFundingTransfer)`

Retrieves information about a specific crypto funding transfer.

- `queryParams`: An object containing parameters for retrieving a specific crypto funding transfer.
  - `transfer_id`: A string representing the ID of the crypto funding transfer to retrieve.

### `getArrayofWhitelistedAddresses(queryParams: GetRetrieveCryptoFundingWallets)`

Retrieves an array of whitelisted addresses for crypto funding.

- `queryParams`: An object containing parameters for retrieving whitelisted addresses.
  - `asset` (optional): A string representing the asset symbol for which to retrieve whitelisted addresses.

### `requestNewWhitelistedAddress(data: RequestNewWhitelistedAddress)`

Requests to whitelist a new address for crypto funding.

- `data`: An object containing data for the new whitelisted address request.
  - `address` (optional): A string representing the address to whitelist.
  - `asset` (optional): A string representing the asset symbol for which to whitelist the address.

### `deleteWhitelistedAddress(data: DeleteWhitelistedAddress)`

Deletes a whitelisted address for crypto funding.

- `data`: An object containing data for deleting a whitelisted address.
  - `whitelisted_address_id`: A string representing the ID of the whitelisted address to delete.

### `getEstimatedGasFee(queryParams: GetEstimatedGasFee)`

Retrieves the estimated gas fee for a crypto transaction.

- `queryParams`: An object containing parameters for estimating the gas fee.
  - `asset` (optional): A string representing the asset symbol for the transaction.
  - `from_address` (optional): A string representing the sender's address.
  - `to_address` (optional): A string representing the recipient's address.
  - `amount` (optional): A string representing the amount of crypto for the transaction.

### `getHistoricalCryptoFunding(queryParams: GetHistoricalAuctions)`

Retrieves historical data for crypto funding.

- `queryParams`: An object containing parameters for the historical crypto funding request.
  - `symbol`: A string representing the symbol for which to retrieve historical data.
  - `start` (optional): A string representing the start date/time for the data range.
  - `end` (optional): A string representing the end date/time for the data range.
  - `limit` (optional): A number representing the maximum number of results to return.
  - `asof` (optional): A string representing the timestamp of the request.
  - `feed` (optional): A string representing the data feed source (e.g., iex, sip, otc).
  - `currency` (optional): A string representing the currency for the data.
  - `page_token` (optional): A string representing the page token for paginated results.
  - `sort` (optional): A string representing the sort order (asc, desc).

### `getHistoricalBars(queryParams: GetHistoricalBars)`

Retrieves historical bar data.

- `queryParams`: An object containing parameters for the historical bar data request.
  - `symbol`: A string representing the symbol for which to retrieve historical data.
  - `timeframe`: A string representing the timeframe for the data (e.g., 1Min, 5Min, 1H).
  - `start` (optional): A string representing the start date/time for the data range.
  - `end` (optional): A string representing the end date/time for the data range.
  - `limit` (optional): A number representing the maximum number of results to return.
  - `adjustment` (optional): A string representing the adjustment type for the data (e.g., raw, split, dividend).
  - `asof` (optional): A string representing the timestamp of the request.
  - `feed` (optional): A string representing the data feed source (e.g., iex, sip, otc).
  - `currency` (optional): A string representing the currency for the data.
  - `page_token` (optional): A string representing the page token for paginated results.
  - `sort` (optional): A string representing the sort order (asc, desc).

### `getLatestBars(queryParams: GetLatestBars)`

Retrieves the latest bar data.

- `queryParams`: An object containing parameters for the latest bar data request.
  - `symbol`: A string representing the symbol for which to retrieve the latest bar data.
  - `feed` (optional): A string representing the data feed source (e.g., iex, sip, otc).
  - `currency` (optional): A string representing the currency for the data.

### `getConditionCodes(queryParams: GetConditionCodes)`

Retrieves condition codes for a given tick type and tape.

- `queryParams`: An object containing parameters for the condition codes request.
  - `ticktype`: A string representing the tick type for which to retrieve condition codes.
  - `tape`: A string representing the tape for which to retrieve condition codes.

### `getHistoricalQuotes(param: GetHistoricalQuotes)`

Retrieves historical quote data.

- `param`: An object containing parameters for the historical quote data request.
  - `symbol`: A string representing the symbol for which to retrieve historical data.
  - Additional optional parameters:
    - `start`: A string representing the start date/time for the data range.
    - `end`: A string representing the end date/time for the data range.
    - `limit`: A number representing the maximum number of results to return.
    - `asof`: A string representing the timestamp of the request.
    - `feed`: A string representing the data feed source (e.g., iex, sip, otc).
    - `currency`: A string representing the currency for the data.
    - `page_token`: A string representing the page token for paginated results.
    - `sort`: A string representing the sort order (asc, desc).

### `getLatestQuotes(param: GetLatestQuotes)`

Retrieves the latest quote data.

- `param`: An object containing parameters for the latest quote data request.
  - `symbol`: A string representing the symbol for which to retrieve the latest quote data.
  - Additional optional parameters:
    - `feed`: A string representing the data feed source (e.g., iex, sip, otc).
    - `currency`: A string representing the currency for the data.

### `getSnapshots(param: GetSnapshots)`

Retrieves snapshots.

- `param`: An object containing parameters for the snapshots request.
  - `symbol`: A string or an array of strings representing the symbol(s) for which to retrieve snapshots.
  - Additional optional parameters:
    - `feed`: A string representing the data feed source (e.g., iex, sip, otc).
    - `currency`: A string representing the currency for the data.

### `getHistoricalTrades(param: GetHistoricalTrades)`

Retrieves historical trade data.

- `param`: An object containing parameters for the historical trade data request.
  - `symbol`: A string representing the symbol for which to retrieve historical data.
  - Additional optional parameters:
    - `start`: A string representing the start date/time for the data range.
    - `end`: A string representing the end date/time for the data range.
    - `limit`: A number representing the maximum number of results to return.
    - `asof`: A string representing the timestamp of the request.
    - `feed`: A string representing the data feed source (e.g., iex, sip, otc).
    - `currency`: A string representing the currency for the data.
    - `page_token`: A string representing the page token for paginated results.
    - `sort`: A string representing the sort order (asc, desc).

### `getLatestTrades(param: GetLatestTrades)`

Retrieves the latest trade data.

- `param`: An object containing parameters for the latest trade data request.
  - `symbol`: A string representing the symbol for which to retrieve the latest trade data.
  - Additional optional parameters:
    - `feed`: A string representing the data feed source (e.g., iex, sip, otc).
    - `currency`: A string representing the currency for the data.

### `getHistoricalAuctionsSingleSymbol(param: GetHistoricalAuctionsSingleSymbol)`

Retrieves historical auction data for a single symbol.

### `getHistoricalBarsSingleSymbol(param: GetHistoricalBarsSingleSymbol)`

Retrieves historical bar data for a single symbol.

### `getLatestBarSingleSymbol(param: GetLatestBarSingleSymbol)`

Retrieves the latest bar data for a single symbol.

### `getHistoricalQuotesSingleSymbol(param: GetHistoricalQuotesSingleSymbol)`

Retrieves historical quote data for a single symbol.

### `getLatestQuoteSingleSymbol(param: GetLatestQuoteSingleSymbol)`

Retrieves the latest quote data for a single symbol.

### `getSnapshotSingleSymbol(param: GetSnapshotSingleSymbol)`

Retrieves a snapshot for a single symbol.

### `getHistoricalTradesSingleSymbol(param: GetHistoricalTradesSingleSymbol)`

Retrieves historical trade data for a single symbol.

### `getLatestTradeSingleSymbol(param: GetLatestTradeSingleSymbol)`

Retrieves the latest trade data for a single symbol.
