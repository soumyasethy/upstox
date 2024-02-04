import {Text, View} from 'react-native';
import React from 'react';
import {UserHoldingItem} from '../types.ts';

type ItemProps = {
  item: UserHoldingItem;
};

export const renderHoldingItem = ({item}: ItemProps) => {
  // For each holding in the userHolding array:
  item.currentValue = item.ltp * item.quantity;
  item.investmentValue = item.avgPrice * item.quantity;
  item.pnl = item.currentValue - item.investmentValue;

  return (
    <>
      <View
        style={{
          paddingLeft: 16,
          height: 1,
          backgroundColor: 'gray',
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItem: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: 16,
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold', marginBottom: 16}}>
            {item.symbol}
          </Text>
          <Text>{item.quantity}</Text>
        </View>
        <View>
          <Text style={{marginBottom: 16}}>LTP: ₹ {item.ltp}</Text>
          <Text>P/L: ₹ {item.pnl.toFixed(2)}</Text>
        </View>
      </View>
    </>
  );
};
