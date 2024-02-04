export type UserHoldingItem = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
  investmentValue: number;
  pnl: number;
  currentValue: number;
};

/** Extra Params which is needed on UI **/
export type UserHoldingTotal = {
  totalCurrentValue: number;
  totalInvestment: number;
  todaysPnl: number;
  totalPnl: number;
};

export type UserHolding = {
  userHolding: UserHoldingItem[];
} & UserHoldingTotal;
