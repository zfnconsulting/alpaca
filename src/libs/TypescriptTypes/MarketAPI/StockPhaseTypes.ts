// Historical auctions
export interface GetHistoricalAuctions {
  symbols: string;
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
  symbols: string;
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
  symbols: string;
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
  symbols: string;
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
  symbols: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}

// Snapshots;
export interface GetSnapshots {
  symbols: string | string[];
  feed?: string; // iex, sip, otc
  currency?: string;
}

// Historical trades
export interface GetHistoricalTrades {
  symbols: string;
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
  symbols: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}
// Historical auctions (single)
export interface GetHistoricalAuctionsSingleSymbol {
  symbols: string; // PATH PARAMS
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
  symbols: string; // PATH PARAMS
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
  symbols: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}
// Historical quotes (single symbol)
export interface GetHistoricalQuotesSingleSymbol {
  symbols: string; // PATH PARAMS
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
  symbols: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}

// Snapshot (single symbol)
export interface GetSnapshotSingleSymbol {
  symbols: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}

// Historical trades (single symbol)
export interface GetHistoricalTradesSingleSymbol {
  symbols: string; // PATH PARAMS
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
  symbols: string;
  feed?: string; // iex, sip, otc
  currency?: string;
}

// HistoricalQuotes SingleSymbol
