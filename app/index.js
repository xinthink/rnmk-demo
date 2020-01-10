/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// import { setTheme, MKColor } from 'react-native-material-kit';

// customize the material design theme
// setTheme({
//   primaryColor: MKColor.Purple,
//   primaryColorRGB: MKColor.RGBPurple,
//   accentColor: MKColor.Amber,
// });

import Buttons from './buttons';
import TextFields from './textfields';
import Toggles from './toggles';
import Progress from './progress';
import Sliders from './sliders';
import Cards from './cards';

const Home = props => (
  <ScrollView style={styles.list} contentContainerStyle={styles.container}>
    <TouchableOpacity onPress={() => navigate(props, 'buttons')}>
      <Text style={styles.pushLabel}>Buttons</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate(props, 'cards')}>
      <Text style={styles.pushLabel}>Cards</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate(props, 'progress')}>
      <Text style={styles.pushLabel}>Loading</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate(props, 'sliders')}>
      <Text style={styles.pushLabel}>Sliders</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate(props, 'textfields')}>
      <Text style={styles.pushLabel}>Text Fields</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate(props, 'toggles')}>
      <Text style={styles.pushLabel}>Toggles</Text>
    </TouchableOpacity>
  </ScrollView>
);

Home.navigationOptions = {
  title: 'Examples',
};

const MainNavigator = createStackNavigator({
  home: { screen: Home },
  buttons: { screen: Buttons },
  cards: { screen: Cards },
  progress: { screen: Progress },
  sliders: { screen: Sliders },
  toggles: { screen: Toggles },
  textfields: { screen: TextFields },
});

function navigate(props, route, params, action) {
  props.navigation.navigate(route, params, action);
}

const App = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#F5FCFF',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 20,
    marginBottom: 0,
  },
  pushLabel: {
    padding: 10,
    color: '#2196F3',
  },
});

export default App;
