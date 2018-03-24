import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

class WeatherSimulator extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('lombard-vr.jpg')}/>

      </View>
    );
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);
