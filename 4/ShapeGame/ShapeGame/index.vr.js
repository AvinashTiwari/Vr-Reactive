import React, {Component} from 'react';
import {View , Text,AppRegistry,StyleSheet } from 'react-vr'

import Shape , {shapes} from './vr/components/Shape';

class ShapeGame extends Component {

constructor(){
  super();
  this.state = {
    gamesShapes: [1, 1, 1, 1]
  }
}

componentDidMount(){
  this.newGameSet();
}
newGameSet(){
 console.log("New Gamet set");
 let baseShapeId = Math.floor(Math.random() * shapes.length);
 console.log(baseShapeId);

 let specialSapeId = baseShapeId;

 while(specialSapeId === baseShapeId)
 {
   specialSapeId = Math.floor(Math.random() * shapes.length);
 }

 console.log(specialSapeId);

let newGameShape =[];
for(let i=0 ; i< this.state.gamesShapes.length; i++)
{
  newGameShape[i] = baseShapeId;
}

console.log(newGameShape);

let specialIndex = Math.floor(Math.random() * newGameShape.length);
newGameShape[specialIndex]  = specialSapeId;

console.log(newGameShape);
this.setState({gamesShapes: newGameShape})

}

  render() {
    return (
      <View style={styles.game}>
        <Text style={styles.text}>Find Odd Shape Now!</Text>
      {
        this.state.gamesShapes.map((shapes,index) => {
          return(
          <View key={index}>
          <Shape
            shapeNum={shapes}
            colorNum={index}
            transform={[{translate:[(index-1.5)*1.5 , 0 , -5]}]}
          />
          </View>
           )
        })
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
game: {
transform: [
  {
    translate:[-2.25, 0 , 0]
  }
]
},

  text: {
    fontSize: 0.5,
    textAlign:'center',
    color: '#fff',
    transform: [{
      translate:[0,2,-5]
    }]
  }
})

AppRegistry.registerComponent('ShapeGame', ()=> ShapeGame);
