import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const Loader = () => {
  return (
    <View style={{padding: 30, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color={'purple'} />
      <Text style={{marginTop: 16}}>Loading...</Text>
    </View>
  );
};

Loader.propTypes = {};

export default Loader;
