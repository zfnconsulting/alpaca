export interface GetHistoricalAuctions {
    symbol: string;
    start?: string;
    end?: string;
    limit?: number;
    asof?: string;
    feed?: string;
    currency?: string;
    page_token?: string;
    sort?: string;
}
export interface GetHistoricalBars {
    symbol: string;
    timeframe: string;
    start?: string;
    end?: string;
    limit?: number;
    adjustment?: string;
    asof?: string;
    feed?: string;
    currency?: string;
    page_token?: string;
    sort?: string;
}
export interface GetLatestBars {
    symbol: string;
    feed?: string;
    currency?: string;
}
export interface GetConditionCodes {
    ticktype: string;
    tape: string;
}
export interface GetHistoricalQuotes {
    symbol: string;
    start?: string;
    end?: string;
    limit?: number;
    asof?: string;
    feed?: string;
    currency?: string;
    page_token?: string;
    sort?: string;
}
export interface GetLatestQuotes {
    symbol: string;
    feed?: string;
    currency?: string;
}
export interface GetSnapshots {
    symbol: string | string[];
    feed?: string;
    currency?: string;
}
export interface GetHistoricalTrades {
    symbol: string;
    start?: string;
    end?: string;
    limit?: number;
    asof?: string;
    feed?: string;
    currency?: string;
    page_token?: string;
    sort?: string;
}
export interface GetLatestTrades {
    symbol: string;
    feed?: string;
    currency?: string;
}
export interface GetHistoricalAuctionsSingleSymbol {
    symbol: string;
    start?: string;
    end?: string;
    limit?: number;
    asof?: string;
    feed?: string;
    currency?: string;
    page_token?: string;
    sort?: string;
}
export interface GetHistoricalBarsSingleSymbol {
    symbol: string;
    timeframe: string;
    start?: string;
    end?: string;
    limit?: number;
    adjustment?: string;
    asof?: string;
    feed?: string;
    currency?: string;
    page_token?: string;
    sort?: string;
}
export interface GetLatestBarSingleSymbol {
    symbol: string;
    feed?: string;
    currency?: string;
}
export interface GetHistoricalQuotesSingleSymbol {
    symbol: string;
    start?: string;
    end?: string;
    limit?: number;
    asof?: string;
    feed?: string;
    currency?: string;
    page_token?: string;
    sort?: string;
}
export interface GetLatestQuoteSingleSymbol {
    symbol: string;
    feed?: string;
    currency?: string;
}
export interface GetSnapshotSingleSymbol {
    symbol: string;
    feed?: string;
    currency?: string;
}
export interface GetHistoricalTradesSingleSymbol {
    symbol: string;
    start?: string;
    end?: string;
    limit?: number;
    asof?: string;
    feed?: string;
    currency?: string;
    page_token?: string;
    sort?: string;
}
export interface GetLatestTradeSingleSymbol {
    symbol: string;
    feed?: string;
    currency?: string;
}
