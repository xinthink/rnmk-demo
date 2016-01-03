/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Navigator,
  // ToolbarAndroid,
  TouchableOpacity,
  BackAndroid,
} = React;

var Buttons = require('./app/buttons');
var TextFields = require('./app/textfields');
var Toggles = require('./app/toggles');
var Progress = require('./app/progress');
var Sliders = require('./app/sliders');
var Cards = require('./app/cards');

var Home = React.createClass({
  render: function () {
    return (
      <ScrollView style={styles.list}
                  contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            name: 'Buttons',
            component: Buttons,
          });
        }}>
          <Text style={styles.pushLabel}>Buttons</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            name: 'Cards',
            component: Cards,
          });
        }}>
          <Text style={styles.pushLabel}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            name: 'Loading',
            component: Progress,
          });
        }}>
          <Text style={styles.pushLabel}>Loading</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            name: 'Sliders',
            component: Sliders,
          });
        }}>
          <Text style={styles.pushLabel}>Sliders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            name: 'Textfields',
            component: TextFields,
          });
        }}>
          <Text style={styles.pushLabel}>Textfields</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            name: 'Toggles',
            component: Toggles,
          });
        }}>
          <Text style={styles.pushLabel}>Toggles</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  },
});

var Example = React.createClass({
  _renderScene: function (route, navigator) {
    this.navigator = navigator;
    switch (route.name) {
      case 'Examples':
        return <Home navigator={navigator}/>;
      default:
        return (
          <route.component/>
        );
      // default:
      //   return (
      //     <View style={{flex: 1}}>
      //       <ToolbarAndroid actions={[]}
      //         title={route.name}
      //         navIcon={require('image!ic_back')}
      //         onIconClicked={navigator.pop}
      //         style={styles.toolbar}
      //       />
      //       <route.component/>
      //     </View>
      //   );
    }
  },

  hardwareBackPress: function () {
    var currentRoutes = this.navigator.getCurrentRoutes();
    // example: [ { name: 'Examples' }, { name: 'Cards' } ]
    if (currentRoutes[currentRoutes.length - 1].name !== 'Examples') {
      // if not on main screen
      // go back to main screen
      this.navigator.popToTop();
      return true;
    }
    // else minimize the application
    return false;
  },

  componentWillMount: function () {
    BackAndroid.addEventListener('hardwareBackPress', this.hardwareBackPress);
  },

  componentWillUnmount: function () {
    BackAndroid.removeEventListener('hardwareBackPress', this.hardwareBackPress);
  },

  render: function () {
    return (
      <Navigator
        initialRoute={{name: 'Examples'}}
        renderScene={this._renderScene}
        />
    );
  },
});

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#a9a9a9',
    height: 56,
  },
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
  },
});

AppRegistry.registerComponent('Example', () => Example);
