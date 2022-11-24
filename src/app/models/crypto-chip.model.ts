export interface CryptoChipModel {
  readonly askPrice: string;
  readonly askQty: string;
  readonly bidPrice: string;
  readonly bidQty: string;
  readonly closeTime: number;
  readonly count: number;
  readonly firstId: number;
  readonly highPrice: string;
  readonly lastId: number;
  readonly lastPrice: string;
  readonly lastQty: string;
  readonly lowPrice: string;
  readonly openPrice: string;
  readonly openTime: number;
  readonly prevClosePrice: string;
  readonly priceChange: string;
  readonly priceChangePercent: string;
  readonly quoteVolume: string;
  readonly symbol: string;
  readonly volume: string;
  readonly weightedAvgPrice: string;
}
