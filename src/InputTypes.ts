// Alpaca date format: YYYY-MM-DD
type Authentication = {
  keyId: string;
  secretKey: string;
  paper: boolean;
};

type symbol_or_asset_id = string;
type GetAnAssetByIDorSymbol = {
  symbol_or_asset_id: symbol_or_asset_id;
};
type AxiosConfig = {
  url: string;
  version: string;
  method: string;
  data?: object;
  params?: object;
  // params?:
  //   | GetAssetsParams
  //   | GetAnAssetByIDorSymbol
  //   | GetAnnouncements;
};

type status = string;
type GetAssetsParams = {
  status?: status;
  asset_class?: string;
  exchange?: string;
  attributes?: string;
};

type GetOptionContracts = {
  underlying_symbols?: string;
  show_deliverables?: boolean;
  status?: status;
  expiration_date?: string;
  expiration_date_gte?: string;
  expiration_date_lte?: string;
  root_symbol?: string;
  type?: string;
  style?: string;
  strike_price_gte?: number;
  strike_price_lte?: number;
  page_token?: string;
  limit?: number;
};
type GetOptionContractByIDorSymbol = {
  symbol_or_asset_id: symbol_or_asset_id;
};

type GetAnnouncements = {
  ca_types: string;
  since: string;
  until: string;
  symbol?: string;
  cusip?: string;
  date_type?: string;
};

type CreateAnOrder = {
  symbol: string;
  qty?: string;
  notional?: string;
  side: string;
  type: string;
  time_in_force: string;
  limit_price?: string;
  stop_price?: string;
  trail_price?: string;
  trail_percent?: string;
  extended_hours?: boolean;
  client_order_id?: string;
  order_class?: string;
  take_profit?: object;
  stop_loss?: object;
  position_intent?: string;
};

type GetAllOrders = {
  status?: string; // open, closed, all
  limit?: number; // Defaults to 50, min 1, max 500
  after?: Time; // yyyy-mm-ddThh:mm:ssZ
  until?: Time; // yyyy-mm-ddThh:mm:ssZ
  direction?: string; // asc or desc
  nested?: boolean;
  symbols?: string; // (ex. “AAPL,TSLA,MSFT”)
  side?: string; // buy or sell
};

interface Time {
  year: string;
  month: string;
  day?: string;
  hour?: string;
  minute?: string;
  seconds?: string;
  milliseconds?: string;
}

interface GetOrderById {
  order_id: string;
}

interface ReplaceOrderbyID {
  order_id: string;
  qty?: string;
  time_in_force?: string;
  limit_price?: string;
  stop_price?: string;
  trail?: string;
  client_order_id?: string;
}

interface DeleteOrderbyID {
  order_id: string;
}

export {
  Authentication,
  GetAssetsParams,
  AxiosConfig,
  GetAnAssetByIDorSymbol,
  GetOptionContracts,
  GetOptionContractByIDorSymbol,
  GetAnnouncements,
  CreateAnOrder,
  GetAllOrders,
  GetOrderById,
  ReplaceOrderbyID,
  DeleteOrderbyID,
};
