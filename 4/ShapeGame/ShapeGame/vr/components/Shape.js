import React, {Component} from 'react';
import {Box, Sphere , Cylinder} from 'react-vr';

const shape = [Box , Sphere , Cylinder]
export default class Shape extends Component
{
   render() {
        let Component = shape[this.props.shapeNum];

        return (
          <Component
              style={{
                color: '#fff',
                transform: this.props.transform
              }}
          />
        )
   }
};
