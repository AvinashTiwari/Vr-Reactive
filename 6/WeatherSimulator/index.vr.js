import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

const apikey ='165c1e5a8c00a7d9586120f7f9a91b41';

class WeatherSimulator extends Component {
  constructor(){
    super();
    this.state ={
      weatherObject: {}
    }
  }

compontentDidMount() {
  console.log('Inside compontentDidMount' );

  fetch('http://api.openweathermap.or/data/2.5/weather?q=SanFrancisco&appid=165c1e5a8c00a7d9586120f7f9a91b41', {
      method: 'GET'
  }).then (response => response.json()).then(json => this.setState({weatherObject: json}) );
}

  render() {
    return (
      <View>
        <Pano source={asset('lombard-vr.jpg')}/>

      </View>
    );
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);
