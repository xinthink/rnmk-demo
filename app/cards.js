const React = require('react-native');
const MK = require('react-native-material-kit');
const appStyles = require('./styles');


const {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} = React;

const {
  MKButton,
  MKColor,
  MKIconToggle,
  MKCardStyles
} = MK;

const styles = Object.assign(appStyles, StyleSheet.create({

}));

const Cards = React.createClass({
  render(){
    var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
    var action = (<Text> My action</Text>);
    var menu = (
       <MKIconToggle
        checked={true}
        onCheckedChange={this._onIconChecked}
        onPress={this._onIconClicked}
        >
        <Text pointerEvents="none"
              style={styles.toggleTextOff}>Off</Text>
        <Text state_checked={true}
              pointerEvents="none"
              style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
      </MKIconToggle>
    );
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
        {/* Here the magic happens*/}
          <View style={MKCardStyles.card}>
            <Image source={{uri : base64Icon}} style={MKCardStyles.image}/>
            <Text style={MKCardStyles.title}>Welcome</Text>
            <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
              style={MKCardStyles.content}
              >
              <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
              </Text>
            </View>
            <View style={MKCardStyles.menu}>{menu}</View>
            <View style={MKCardStyles.action}>
              <Text>My Action</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
})

module.exports = Cards;
