import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View, Pressable} from 'react-native';
import {EmptyData, URL} from './src/constants.ts';
import {styles} from './src/styles';
import {CollapseView} from './src/components/CollapseView.tsx';
import {syncPortfolioMetrics} from './src/utils.ts';
import {renderHoldingItem} from './src/components/HoldingItem.tsx';
import Loader from './src/components/Loader.tsx';

const App = () => {
  const [data, setData] = useState(EmptyData);
  const [loading, toggleLoading] = useState(false);

  //fetch data from remote
  useEffect(() => {
    toggleLoading(!loading);
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(response => syncPortfolioMetrics(response, setData))
      .catch(err => console.log('error in data fetch', err))
      .finally(() => {
        toggleLoading(!loading);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, {color: 'white'}]}>Upstox Holding</Text>
      </View>
      {data.userHolding.length === 0 && <Loader />}
      <FlatList
        data={data.userHolding}
        renderItem={renderHoldingItem}
        keyExtractor={(item: {id: any}) => item.id}
        style={styles.flatList}
        extraData={data.userHolding}
      />
      <CollapseView>
        <View style={styles.item}>
          <Text style={styles.title}>Current Value:</Text>
          <Text>₹ {data.totalCurrentValue?.toFixed(2)} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Total Investment: </Text>
          <Text>₹ {data.totalInvestment?.toFixed(2)} </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Today's Profit & Loss: </Text>
          <Text>₹ {data.todaysPnl?.toFixed(2)} </Text>
        </View>
      </CollapseView>
      <Pressable style={[styles.item]}>
        <Text style={styles.title}>Profit & Loss: </Text>
        <Text>₹ {data.totalPnl?.toFixed(2)} </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;
