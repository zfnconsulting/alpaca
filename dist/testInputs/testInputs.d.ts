export declare const getAnAssetByIDorSymbol_input: {
    symbol_or_asset_id: string;
};
export declare const getAssets_input: null;
export declare const getOptionContracts_input: {
    underlying_symbols: string;
    show_deliverables: boolean;
    status: string;
    expiration_date: string;
    limit: number;
};
export declare const getOptionContractByIDorSymbol_input: {
    symbol_or_asset_id: string;
};
export declare const getAnnouncements_input: {
    ca_types: string;
    since: string;
    until: string;
    symbol: string;
};
export declare const getSpecificAnnouncement_input: undefined;
export declare const createAnOrder_input: {
    symbol: string;
    qty: string;
    side: string;
    type: string;
    limit_price: string;
    time_in_force: string;
};
export declare const getAllOrders_input: {
    status: string;
    limit: number;
    after: {
        year: string;
        month: string;
        day: string;
        hour: string;
        minute: string;
        seconds: string;
        milliseconds: string;
    };
};
export declare const deleteAllOrders_input: undefined;
export declare const getOrderById_input: {
    order_id: string;
};
export declare const replaceOrderbyID_input: {
    order_id: string;
};
export declare const deleteOrderbyID_input: {
    order_id: string;
};
export declare const createWatchlist_input: {
    name: string;
    symbols: string[];
};
export declare const updateWatchlistById_input: {
    watchlist_id: string;
    name: string;
    symbols: string[];
};
export declare const addAssettoWatchlistInput: {
    name: string;
};
export declare const getWatchlistbyNameInput: {
    name: string;
};
export declare const queryParams: {
    period: string;
    timeframe: string;
    intraday_reporting: string;
    pnl_reset: string;
    start: string;
    end: string;
};
