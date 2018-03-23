import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model
} from 'react-vr';

export default class ModelAnimation extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}/>
        <Model
         source={{obj: asset('Tree.obj')}}
         style={{
           transform: [{translate: [0, -1, -3]}]
         }}/>


      </View>
    );
  }
};

AppRegistry.registerComponent('ModelAnimation', () => ModelAnimation);
