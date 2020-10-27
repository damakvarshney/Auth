import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const AppView = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: StatusBar.currentHeight,
  },
});

export default AppView;
