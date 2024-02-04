import {UserHolding, UserHoldingItem} from './types.ts';

/**@description
 * data: UserHolding ->[UserHoldingItem+UserHoldingTotal],
 * callbackWebHook?: (data: UserHolding) => void
 * @callbackWebHook Update the data and A callback to trigger Refresh Event with State Update
 * **/

export const syncPortfolioMetrics = (
  data: UserHolding,
  callbackWebHook?: (data: UserHolding) => void,
) => {
  /** Calculate individual metrics for each holding **/
  data.userHolding.forEach(
    (holding: {
      currentValue: number;
      ltp: number;
      quantity: number;
      investmentValue: number;
      avgPrice: number;
      pnl: number;
    }) => {
      holding.currentValue = holding.ltp * holding.quantity;
      holding.investmentValue = holding.avgPrice * holding.quantity;
      holding.pnl = holding.currentValue - holding.investmentValue;
    },
  );

  /** Calculate totals **/
  data.totalCurrentValue = data.userHolding.reduce(
    (acc: number, holding: UserHoldingItem) => acc + holding.currentValue,
    0,
  );
  data.totalInvestment = data.userHolding.reduce(
    (acc: number, holding: UserHoldingItem) => acc + holding.investmentValue,
    0,
  );
  data.totalPnl = data.totalCurrentValue - data.totalInvestment;
  data.todaysPnl = data.userHolding.reduce(
    (acc: number, holding: UserHoldingItem) =>
      acc + (holding.close - holding.ltp) * holding.quantity,
    0,
  );

  if (callbackWebHook) {
    callbackWebHook(data);
  }
};
