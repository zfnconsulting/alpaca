interface GetHistoricalAuctions {
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
interface GetHistoricalBars {
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
interface GetLatestBars {
    symbol: string;
    feed?: string;
    currency?: string;
}
interface GetConditionCodes {
    ticktype: string;
    tape: string;
}
interface GetHistoricalQuotes {
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
interface GetLatestQuotes {
    symbol: string;
    feed?: string;
    currency?: string;
}
interface GetSnapshots {
    symbol: string;
    feed?: string;
    currency?: string;
}
interface GetHistoricalTrades {
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
interface GetLatestTrades {
    symbol: string;
    feed?: string;
    currency?: string;
}
interface GetHistoricalAuctionsSingleSymbol {
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
interface GetHistoricalBarsSingleSymbol {
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
interface GetLatestBarSingleSymbol {
    symbol: string;
    feed?: string;
    currency?: string;
}
interface GetHistoricalQuotesSingleSymbol {
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
interface GetLatestQuoteSingleSymbol {
    symbol: string;
    feed?: string;
    currency?: string;
}
interface GetSnapshotSingleSymbol {
    symbol: string;
    feed?: string;
    currency?: string;
}
interface GetHistoricalTradesSingleSymbol {
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
interface GetLatestTradeSingleSymbol {
    symbol: string;
    feed?: string;
    currency?: string;
}
