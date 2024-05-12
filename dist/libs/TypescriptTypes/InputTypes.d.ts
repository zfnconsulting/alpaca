type Authentication = {
    keyId: string;
    secretKey: string;
    paper: boolean;
};
type symbol_or_asset_id = string;
type GetAnAssetByIDorSymbol = {
    symbol_or_asset_id: symbol_or_asset_id;
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
    status?: string;
    limit?: number;
    after?: Time;
    until?: Time;
    direction?: string;
    nested?: boolean;
    symbols?: string;
    side?: string;
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
interface CloseAllPositions {
    cancel_orders: boolean;
}
interface GetOpenPosition {
    symbol_or_asset_id: symbol_or_asset_id;
}
interface ClosePosition {
    symbol_or_asset_id: symbol_or_asset_id;
    qty?: string;
    percentage?: string;
}
interface ExerciseOptionPosition {
    symbol_or_contract_id: string;
}
interface GetAccountPortfolioHistory {
    period?: string;
    timeframe?: string;
    intraday_reporting?: "market_hours" | "extended_hours" | "continuous";
    start?: string;
    end?: string;
    pnl_reset?: "per_day" | "no_reset";
    date_end?: string;
    extended_hours?: boolean;
}
interface CreateWatchlist {
    name: string;
    symbols?: string | string[];
}
interface GetWatchlistbyID {
    watchlist_id: string;
}
interface UpdateWatchlistById {
    watchlist_id: string;
    name: string;
    symbols: string | string[];
}
interface AddAssettoWatchlist {
    watchlist_id: string;
    symbols?: string | string[];
}
interface DeleteWatchlistById {
    watchlist_id: string;
}
interface GetWatchlistbyName {
    name: string;
}
interface UpdateWatchlistByName {
    currentName: string;
    newName: string;
    symbols?: string | string[];
}
interface AddAssettoWatchlistByName {
    name: string;
    symbols?: string;
}
interface DeleteWatchlistByName {
    name: string;
}
interface DeleteSymbolfromWatchlist {
    watchlist_id: string;
    symbol: string;
}
interface AccountConfigurations {
    dtbp_check?: string;
    trade_confirm_email?: string;
    suspend_trade?: boolean;
    fractional_trading?: boolean;
    max_margin_multiplier?: string;
    max_options_trading_level?: number;
    pdt_check?: string;
    ptp_no_exception_entry?: string;
}
export { Authentication, GetAssetsParams, GetAnAssetByIDorSymbol, GetOptionContracts, GetOptionContractByIDorSymbol, GetAnnouncements, CreateAnOrder, GetAllOrders, GetOrderById, ReplaceOrderbyID, DeleteOrderbyID, CloseAllPositions, GetOpenPosition, ClosePosition, ExerciseOptionPosition, GetAccountPortfolioHistory, CreateWatchlist, GetWatchlistbyID, UpdateWatchlistById, AddAssettoWatchlist, DeleteWatchlistById, GetWatchlistbyName, UpdateWatchlistByName, AddAssettoWatchlistByName, DeleteWatchlistByName, DeleteSymbolfromWatchlist, AccountConfigurations, };
