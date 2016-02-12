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

const styles = Object.assign({}, appStyles, StyleSheet.create({
  slider: {
    width: 130,
  },
}));

const SliderWithValue = mdl.Slider.slider()
  .withStyle(styles.slider)
  .withMin(10)
  .withMax(100)
  .build();

const RangeSlider = mdl.RangeSlider.slider()
  .withStyle(styles.slider)
  .withMin(10)
  .withMax(100)
  .withMinValue(20)
  .withMaxValue(75)
  .build();

class ValueText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curValue: props.initial,
    };
  }

  onChange(curValue) {
    this.setState({curValue});
  }

  render() {
    return (
      <Text style={styles.legendLabel}>
        {this.state.curValue} ({this.props.rangeText})
      </Text>
    );
  }
}

class Sliders extends Component {

  componentDidMount() {
    const slider = this.refs.sliderWithValue;
    const ranged = this.refs.rangeSlider;

    slider.value = 25;
    setTimeout((() => {
      slider.value = 75;
      ranged.maxValue = 95;
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
              onChange={(curValue) => this.refs.valueText.onChange(curValue.toFixed(2))}
              />
            <ValueText ref="valueText" rangeText="10~100" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <mdl.RangeSlider style={styles.slider}/>
            <Text style={styles.legendLabel}>Range Slider</Text>
          </View>
          <View style={styles.col}>
            <RangeSlider
              ref="rangeSlider"
              onChange={(curValue) => this.refs.rangeValueText.onChange(curValue.min.toFixed(2) + '-' + curValue.max.toFixed(2))}
              />
            <ValueText ref="rangeValueText" initial="20.00-75.00" rangeText="10~100" />
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Sliders;
