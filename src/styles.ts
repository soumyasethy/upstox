import {StatusBar, StyleSheet} from 'react-native';
import {HeaderHeight} from './constants.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
  },
  header: {
    height: HeaderHeight,
    paddingLeft: 16,
    backgroundColor: 'purple',
    justifyContent: 'center',
  },
  title: {fontWeight: 'bold'},
  triangle: {
    width: 0,
    height: 0,
    marginTop: 8,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'purple',
  },
  item: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    justifyItem: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
    backgroundColor: 'white',
  },
  flatList: {backgroundColor: 'gray', flex: 1},
});
