/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ToolbarAndroid,
  BackHandler,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import { setTheme, MKColor } from 'react-native-material-kit';

// customize the material design theme
setTheme({
  primaryColor: MKColor.Purple,
  primaryColorRGB: MKColor.RGBPurple,
  accentColor: MKColor.Amber,
});

import Buttons from './app/buttons';
import TextFields from './app/textfields';
import Toggles from './app/toggles';
import Progress from './app/progress';
import Sliders from './app/sliders';
import Cards from './app/cards';

function renderScreen(route, navigator) {
  return (
    <View style={styles.container}>
      <route.component
        {...route.passProps}
        navigator={navigator}
      />
      <ToolbarAndroid
        style={styles.toolbar}
        title={route.title}
        navIcon={require('./img/ic_back.png')}
        onIconClicked={() => navigator.pop()}
      />
    </View>
  );
}

function renderHome(navigator) {
  return (
    <View style={styles.container}>
      <Home navigator={navigator} />
      <ToolbarAndroid
        style={styles.toolbar}
        title="Examples"
      />
    </View>
  );
}

class Home extends React.Component {
  render = () => (
      <ScrollView
          style={styles.list}
          contentContainerStyle={styles.container}
      >
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Buttons',
            component: Buttons,
          });
        }}>
          <Text style={styles.pushLabel}>Buttons</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Cards',
            component: Cards,
          });
        }}>
          <Text style={styles.pushLabel}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Loading',
            component: Progress,
          });
        }}>
          <Text style={styles.pushLabel}>Loading</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Sliders',
            component: Sliders,
          });
        }}>
          <Text style={styles.pushLabel}>Sliders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Textfields',
            component: TextFields,
          });
        }}>
          <Text style={styles.pushLabel}>Textfields</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Toggles',
            component: Toggles,
          });
        }}>
          <Text style={styles.pushLabel}>Toggles</Text>
        </TouchableOpacity>
      </ScrollView>
  );
}

class Example extends React.Component {

  routes = (route, navigator) => {
    this.navigator = navigator;
    //console.log('routing to:', route);
    switch (route.name) {
      case 'home':
        return renderHome(navigator);
      default:
        return renderScreen(route, navigator);
    }
  };

  hardwareBackPress = () => {
    if (!this.navigator) {
      return false;
    }

    const currentRoutes = this.navigator.getCurrentRoutes();
    if (currentRoutes[currentRoutes.length - 1].name !== 'home') {
      // if not on main screen
      // go back to main screen
      this.navigator.popToTop();
      return true;
    }
    // else minimize the application
    return false;
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.hardwareBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.hardwareBackPress);
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'home'}}
        renderScene={this.routes}
        />
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'rgba(245,252,255,.98)',
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  list: {
    backgroundColor: '#F5FCFF',
    paddingTop: 64,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
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
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('Example', () => Example);
