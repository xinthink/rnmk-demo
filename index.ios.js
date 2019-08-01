/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  NavigatorIOS,
  TouchableOpacity,
} from 'react-native';

import { setTheme, MKColor } from 'react-native-material-kit';

// customize the material design theme
setTheme({
  primaryColor: MKColor.Purple,
  primaryColorRGB: MKColor.RGBPurple,
  accentColor: MKColor.Amber,
});

import Buttons from './app/buttons';
// import TextFields from './app/textfields';
import Toggles from './app/toggles';
// import Progress from './app/progress';
// import Sliders from './app/sliders';
import Cards from './app/cards';

const Home = (props) => (
  <ScrollView
    style={styles.list}
    contentContainerStyle={styles.container}
  >
    <TouchableOpacity
      onPress={() =>
        props.navigator.push({
          title: 'Buttons',
          component: Buttons,
        })
      }
    >
      <Text style={styles.pushLabel}>Buttons</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        props.navigator.push({
          title: 'Cards',
          component: Cards,
        })
      }
    >
      <Text style={styles.pushLabel}>Cards</Text>
    </TouchableOpacity>
    {/*<TouchableOpacity*/}
      {/*onPress={() =>*/}
        {/*props.navigator.push({*/}
          {/*title: 'Loading',*/}
          {/*component: Progress,*/}
        {/*})*/}
      {/*}*/}
    {/*>*/}
      {/*<Text style={styles.pushLabel}>Loading</Text>*/}
    {/*</TouchableOpacity>*/}
    {/*<TouchableOpacity*/}
      {/*onPress={() =>*/}
        {/*props.navigator.push({*/}
          {/*title: 'Sliders',*/}
          {/*component: Sliders,*/}
        {/*})*/}
      {/*}*/}
    {/*>*/}
      {/*<Text style={styles.pushLabel}>Sliders</Text>*/}
    {/*</TouchableOpacity>*/}
    {/*<TouchableOpacity*/}
      {/*onPress={() =>*/}
        {/*props.navigator.push({*/}
          {/*title: 'Text Fields',*/}
          {/*component: TextFields,*/}
        {/*})*/}
      {/*}*/}
    {/*>*/}
      {/*<Text style={styles.pushLabel}>Text Fields</Text>*/}
    {/* </TouchableOpacity> */}
     <TouchableOpacity
      onPress={() =>
        props.navigator.push({
          title: 'Toggles',
          component: Toggles,
        })
      }
    >
      <Text style={styles.pushLabel}>Toggles</Text>
    </TouchableOpacity>
  </ScrollView>
)

const Example = () =>
  <NavigatorIOS
    style={{flex: 1}}
    initialRoute={{
      component: Home,
      title: 'Examples',
    }}
  />

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
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
    marginTop: 20, marginBottom: 0,
  },
  pushLabel: {
    padding: 10,
    color: '#2196F3',
  }
});

AppRegistry.registerComponent('rnmk-demo', () => Example);
