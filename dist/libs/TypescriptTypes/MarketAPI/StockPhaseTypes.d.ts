export interface GetHistoricalAuctions {
    symbols: string;
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
    symbols: string;
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
    symbols: string;
    feed?: string;
    currency?: string;
}
export interface GetConditionCodes {
    ticktype: string;
    tape: string;
}
export interface GetHistoricalQuotes {
    symbols: string;
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
    symbols: string;
    feed?: string;
    currency?: string;
}
export interface GetSnapshots {
    symbols: string | string[];
    feed?: string;
    currency?: string;
}
export interface GetHistoricalTrades {
    symbols: string;
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
    symbols: string;
    feed?: string;
    currency?: string;
}
export interface GetHistoricalAuctionsSingleSymbol {
    symbols: string;
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
    symbols: string;
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
    symbols: string;
    feed?: string;
    currency?: string;
}
export interface GetHistoricalQuotesSingleSymbol {
    symbols: string;
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
    symbols: string;
    feed?: string;
    currency?: string;
}
export interface GetSnapshotSingleSymbol {
    symbols: string;
    feed?: string;
    currency?: string;
}
export interface GetHistoricalTradesSingleSymbol {
    symbols: string;
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
    symbols: string;
    feed?: string;
    currency?: string;
}
