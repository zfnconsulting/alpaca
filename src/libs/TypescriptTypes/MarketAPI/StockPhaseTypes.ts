// Historical auctions
export interface GetHistoricalAuctions {
  symbol: string;
  start?: string;
  end?: string;
  limit?: number;
  asof?: string;
  feed?: string; // iex, sip, otc
  currency?: string;
  page_token?: string;
  sort?: string; // asc, desc
}

// Historical bars
export interface GetHistoricalBars {
  symbol: string;
  timeframe: string;
  start?: string;
  end?: string;
  limit?: number;
  adjustment?: string; // raw, split, dividend, all
  asof?: string;
  feed?: string; // iex, sip, otc
  currency?: string;
  page_token?: string;
  sort?: string; // asc, desc
}

// Latest bars
export interface GetLatestBars {
  symbol: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}

// Condition codes
export interface GetConditionCodes {
  ticktype: string;
  tape: string;
}

// Historical quotes
export interface GetHistoricalQuotes {
  symbol: string;
  start?: string;
  end?: string;
  limit?: number;
  asof?: string;
  feed?: string; // iex, sip, otc
  currency?: string;
  page_token?: string;
  sort?: string; // asc, desc
}

// Latest quotes
export interface GetLatestQuotes {
  symbol: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}

// Snapshots;
export interface GetSnapshots {
  symbol: string | string[];
  feed?: string; // iex, sip, otc
  currency?: string;
}

// Historical trades
export interface GetHistoricalTrades {
  symbol: string;
  start?: string;
  end?: string;
  limit?: number;
  asof?: string;
  feed?: string; // iex, sip, otc
  currency?: string;
  page_token?: string;
  sort?: string; // asc, desc
}

// Latest trades
export interface GetLatestTrades {
  symbol: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}
// Historical auctions (single)
export interface GetHistoricalAuctionsSingleSymbol {
  symbol: string; // PATH PARAMS
  start?: string; // QUERY PARAMS
  end?: string;
  limit?: number;
  asof?: string;
  feed?: string; // iex, sip, otc
  currency?: string;
  page_token?: string;
  sort?: string; // asc, desc
}

// Historical bars (single symbol)
export interface GetHistoricalBarsSingleSymbol {
  symbol: string; // PATH PARAMS
  timeframe: string; // QUERY PARAMS
  start?: string;
  end?: string;
  limit?: number;
  adjustment?: string; // raw, split, dividend, all
  asof?: string;
  feed?: string; // iex, sip, otc
  currency?: string;
  page_token?: string;
  sort?: string; // asc, desc
}

// Latest bar (single symbol)
export interface GetLatestBarSingleSymbol {
  symbol: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}
// Historical quotes (single symbol)
export interface GetHistoricalQuotesSingleSymbol {
  symbol: string; // PATH PARAMS
  start?: string;
  end?: string;
  limit?: number;
  asof?: string;
  feed?: string; // iex, sip, otc
  currency?: string;
  page_token?: string;
  sort?: string; // asc, desc
}

// Latest quote (single symbol)
export interface GetLatestQuoteSingleSymbol {
  symbol: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}

// Snapshot (single symbol)
export interface GetSnapshotSingleSymbol {
  symbol: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}

// Historical trades (single symbol)
export interface GetHistoricalTradesSingleSymbol {
  symbol: string; // PATH PARAMS
  start?: string;
  end?: string;
  limit?: number;
  asof?: string;
  feed?: string; // iex, sip, otc
  currency?: string;
  page_token?: string;
  sort?: string; // asc, desc
}

// Latest trade (single symbol)
export interface GetLatestTradeSingleSymbol {
  symbol: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}

// HistoricalQuotes SingleSymbol
