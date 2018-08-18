/**
 * Created by ywu on 15/8/31.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  MKColor,
  MKSlider,
  MKRangeSlider,
  setTheme,
} from 'react-native-material-kit';

import appStyles from './styles';

// customize the material design theme
// setTheme({
//   primaryColor: MKColor.Orange,
// });

const styles = Object.assign({}, appStyles, StyleSheet.create({
  slider: {
    width: 130,
  },
}));


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
            <MKSlider style={styles.slider}
            />
            <Text style={styles.legendLabel}>Slider</Text>
          </View>
          <View style={styles.col}>
            <MKSlider
              ref="sliderWithValue"
              min={10}
              max={100}
              value={25}
              style={styles.slider}
              onChange={(curValue) => this.refs.valueText.onChange(curValue.toFixed(2))}
              />
            <ValueText ref="valueText" initial="25.00" rangeText="10~100" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <MKRangeSlider style={styles.slider}/>
            <Text style={styles.legendLabel}>Range Slider</Text>
          </View>
          <View style={styles.col}>
            <MKRangeSlider
              ref="rangeSlider"
              min={10}
              max={100}
              minValue={20}
              maxValue={75}
              style={styles.slider}
              onChange={(curValue) => this.refs.rangeValueText.onChange(curValue.min.toFixed(2) + '-' + curValue.max.toFixed(2))}
              />
            <ValueText ref="rangeValueText" initial="20.00-75.00" rangeText="10~100" />
          </View>
        </View>
      </View>
    );
  }
}

export default Sliders;
