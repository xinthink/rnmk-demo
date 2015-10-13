/**
 * Created by ywu on 15/8/31.
 */

const React = require('react-native');
const appStyles = require('./styles');

const {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

const {
  MKColor,
  mdl,
  setTheme,
} = require('react-native-material-kit');

// customize the material design theme
// setTheme({
//   primaryColor: MKColor.Orange,
// });

const styles = Object.assign(appStyles, StyleSheet.create({
  slider: {
    width: 130,
  },
}));

const SliderWithValue = mdl.Slider.slider()
  .withStyle(styles.slider)
  .withMin(10)
  .withMax(100)
  .build();

class ValueText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curValue: 55,
    };
  }

  onChange(curValue) {
    this.setState({curValue});
  }

  render() {
    return (
      <Text style={styles.legendLabel}>
            {this.state.curValue.toFixed(2)} ({this.props.rangeText})
      </Text>
    );
  }
}

class Sliders extends Component {

  componentDidMount() {
    const slider = this.refs.sliderWithValue;
    slider.value = 25;
    setTimeout((() => {
      slider.value = 75;
    }), 1000);
  }

  render() {
    return (
      <View style={[styles.scrollView, {
              marginTop: 120,
            }]}
            contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <mdl.Slider style={styles.slider}/>
            <Text style={styles.legendLabel}>Slider</Text>
          </View>
          <View style={styles.col}>
            <SliderWithValue
              ref="sliderWithValue"
              onChange={(curValue) => this.refs.valueText.onChange(curValue)}
              />
            <ValueText ref="valueText" rangeText="10~100" />
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Sliders;
