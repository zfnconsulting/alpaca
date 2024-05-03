# Alpaca Trading API Documentation

## Node.js library for Alpaca Trade API

## Overview

This is my version of Alpaca's Trading API Documentation. I found the current Alpaca SDK very lacking of many features. This documentation is still a working progress.

The Alpaca Trading API provides a comprehensive set of endpoints for managing trading activities, account information, market data, and more. It is designed for developers looking to create automated trading systems or integrate Alpaca's functionalities into their applications.

## API Documentation

The REST API documentation can be found in https://docs.alpaca.markets. For detailed information about an endpoint, please consult the REST API docs. Documentation specific to this library can be found below.

## Table of Contents

- [Usage](#Usage)
- [getAccount](#getAccount)
  - [Example getAccount Response](#Example-getAccount-Response)
- [getAssets](#getAssets)
  - [Example getAccount Response](#Example-getAssets-Response)

## Usage

Import the module first.

```js
const Alpaca = require("@zufans/alpaca");
```

Or

```js
import Alpaca from "@zufans/alpaca";
```

Instantiate the API with config options, obtained from the dashboard at app.alpaca.markets.

```js
const alpaca = new Alpaca({
  keyId: "AKFZXJH121U18SHHDRFO",
  secretKey: "pnq4YHlpMF3LhfLyOvmdfLmlz6BnASrTPQIASeiU",
  paper: true,
});
```

- **keyId ** (string) -required: The unique identifier for the account.
- **secretKey** (string) -required: The current status of the account.
- **paper** (string) -required: The base currency of the account.

## getAccount

`Endpoint GET: /v2/accounts`

```js
alpaca.getAccount().then((account) => {
  console.log("Current Account:", account);
});
```

### Example getAccount Response

```json
{
  "id": "1d9eed04-be39-4e01-9b84-a48ac5bbafcf",
  "admin_configurations": {},
  "user_configurations": null,
  "account_number": "PALPACA_123",
  "status": "ACTIVE",
  "crypto_status": "ACTIVE",
  "currency": "USD",
  "buying_power": "245432.61",
  "regt_buying_power": "245432.61",
  "daytrading_buying_power": "0",
  "options_buying_power": "122716.305",
  "effective_buying_power": "245432.61",
  "non_marginable_buying_power": "122086.5",
  "bod_dtbp": 0,
  "cash": "122086.5",
  "accrued_fees": "0",
  "pending_transfer_in": "0",
  "portfolio_value": "123346.11",
  "pattern_day_trader": true,
  "trading_blocked": false,
  "transfers_blocked": false,
  "account_blocked": false,
  "created_at": "2023-01-01T18:20:20.272275Z",
  "trade_suspended_by_user": false,
  "multiplier": "2",
  "shorting_enabled": true,
  "equity": "123346.11",
  "last_equity": "122011.09751111286868",
  "long_market_value": "1259.61",
  "short_market_value": "0",
  "position_market_value": "1259.61",
  "initial_margin": "629.8",
  "maintenance_margin": "377.88",
  "last_maintenance_margin": "480.73",
  "sma": "123369.74",
  "daytrade_count": 0,
  "balance_asof": "2023-09-27",
  "crypto_tier": 1,
  "options_trading_level": 2
}
```

## getAssets

`Endpoint GET: /v2/assets`

```js
alpaca.getAssets().then((getAssets) => {
  console.log("Current Assets:", getAssets);
});
```

### Example getAccount Response

```json
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "class": "us_equity",
    "exchange": "NYSE",
    "symbol": "AAPL",
    "name": "string",
    "status": "active",
    "tradable": true,
    "marginable": true,
    "shortable": true,
    "easy_to_borrow": true,
    "fractionable": true,
    "maintenance_margin_requirement": "string",
    "attributes": ["ptp_no_exception", "ipo"]
  }
  //...more items
]
```
