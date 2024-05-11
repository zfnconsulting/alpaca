# Alpaca Class Documentation

## Node.js library for Alpaca Trade API

## Overview

This is my version of Alpaca's Trading API Documentation. I found the current Alpaca SDK very lacking of many features. This documentation is still a working progress.

The Alpaca Trading API provides a comprehensive set of endpoints for managing trading activities, account information, market data, and more. It is designed for developers looking to create automated trading systems or integrate Alpaca's functionalities into their applications.

## API Documentation

The REST API documentation can be found in https://docs.alpaca.markets. For detailed information about an endpoint, please consult the REST API docs. Documentation specific to this library can be found below.

## Table of Contents

- [Usage](#Installation-And-Usage)
- [Constructor](#constructor)
- [Methods](#methods)
  - [getAccount()](#getaccount-promisegetaccount)
  - [getAssets(params?: GetAssetsParams)](#getassetsparams-getassetsparams-promiseobject)
  - [getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol)](#getanassetbyidorSymbolparams-getanassetbyidorSymbol-promiseobject)
  - [getOptionContracts(param?: GetOptionContracts)](#getoptioncontractsparam-getoptioncontracts-promiseobject)
  - [getOptionContractByIDorSymbol(param: GetOptionContractByIDorSymbol)](#getoptioncontractbyidorSymbolparam-getoptioncontractbyidorSymbol-promiseobject)
  - [getSpecificAnnouncement(id: string)](#getspecificannouncementid-string-promiseobject)
  - [getAnnouncements(param: GetAnnouncements)](#getannouncementsparam-getannouncements-promiseobject)
  - [createAnOrder(param: CreateAnOrder)](#createanorderparam-createanorder-promiseobject)
  - [getAllOrders(param: GetAllOrders)](#getallordersparam-getallorders-promiseobject)
  - [deleteAllOrders()](#deleteallorders-promiseobject)
  - [getOrderById(param: GetOrderById)](#getorderbyidparam-getorderbyid-promiseobject)
  - [replaceOrderbyID(param: ReplaceOrderbyID)](#replaceorderbyidparam-replaceorderbyid-promiseobject)
  - [deleteOrderbyID(param: DeleteOrderbyID)](#deleteorderbyidparam-deleteorderbyid-promiseobject)
  - [getAllOpenPositions()](#getallopenpositions-promiseobject)
  - [closeAllPositions(param: CloseAllPositions)](#closeallpositionsparam-closeallpositions-promiseobject)
  - [getOpenPosition(param: GetOpenPosition)](#getopenpositionparam-getopenposition-promiseobject)
  - [closePosition(param: ClosePosition)](#closepositionparam-closeposition-promiseobject)
  - [exerciseOptionPosition(param: ExerciseOptionPosition)](#exerciseoptionpositionparam-exerciseoptionposition-promiseobject)

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

### `alpaca.constructor(auth: Authentication)`

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

### `alpaca.getAccount()`

Retrieves information about the account associated with the provided authentication credentials.

### `alpaca.getAssets(params?: GetAssetsParams)`

Retrieves a list of assets available for trading on the Alpaca platform.

- `params` (optional): An object containing optional parameters for filtering assets.
  - `status`: A string representing the status of assets to retrieve (e.g., 'active', 'inactive').
  - `asset_class`: A string representing the asset class (e.g., 'us_equity', 'us_option').
  - `exchange`: A string representing the exchange where the asset is traded.
  - `attributes`: A string representing additional attributes to include in the response.

### `alpaca.getAnAssetByIDorSymbol(param: GetAnAssetByIDorSymbol)`

Retrieves information about a specific asset identified by its ID or symbol.

- `param`: An object containing either the ID or symbol of the asset to retrieve.
  - `symbol_or_asset_id`: A string representing either the asset ID or symbol.

### `alpaca.getOptionContracts(param?: GetOptionContracts)`

Retrieves a list of option contracts available for trading.

- `param` (optional): An object containing optional parameters for filtering option contracts.

### `alpaca.getOptionContractByIDorSymbol(param: GetOptionContractByIDorSymbol)`

Retrieves information about a specific option contract identified by its ID or symbol.

- `param`: An object containing either the ID or symbol of the option contract to retrieve.
  - `symbol_or_asset_id`: A string representing either the option contract ID or symbol.

### `alpaca.getSpecificAnnouncement(id: string)`

Retrieves information about a specific corporate announcement.

- `id`: A string representing the ID of the announcement to retrieve.

### `alpaca.getAnnouncements(param: GetAnnouncements)`

Retrieves a list of corporate announcements.

- `param`: An object containing parameters for filtering announcements.
  - `ca_types`: A string representing the types of corporate actions to retrieve.
  - `since`: A string representing the start date for filtering announcements.
  - `until`: A string representing the end date for filtering announcements.
  - `symbol` (optional): A string representing the symbol of the asset associated with the announcements.
  - `cusip` (optional): A string representing the CUSIP of the asset associated with the announcements.
  - `date_type` (optional): A string representing the date type for filtering announcements.

### `alpaca.createAnOrder(param: CreateAnOrder)`

Creates a new order for trading.

- `param`: An object containing parameters for creating the order.
  - See method signature for details.

### `alpaca.getAllOrders(param: GetAllOrders)`

Retrieves a list of all orders associated with the account.

- `param`: An object containing optional parameters for filtering orders.
  - See method signature for details.

### `alpaca.deleteAllOrders()`

Deletes all open orders associated with the account.

### `alpaca.getOrderById(param: GetOrderById)`

Retrieves information about a specific order identified by its ID.

- `param`: An object containing the ID of the order to retrieve.
  - `order_id`: A string representing the ID of the order.

### `alpaca.replaceOrderbyID(param: ReplaceOrderbyID)`

Replaces an existing order with new parameters.

- `param`: An object containing parameters for replacing the order.
  - See method signature for details.

### `alpaca.deleteOrderbyID(param: DeleteOrderbyID)`

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
