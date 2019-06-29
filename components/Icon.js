
import React, { PureComponent } from 'react';
import { Image } from 'react-native';

const vehicleIcon = (
  <Image
    source={require('../assets/images/icons/vehicle.png')}
    style={{ height: 50, width: 50 }}
  />
);

const distanceIcon = (
  <Image
    source={require('../assets/images/icons/distance.png')}
    style={{ height: 50, width: 50 }}
  />
);

const optionsIcon = (
  <Image
    source={require('../assets/images/icons/options.png')}
    style={{ height: 16, width: 16 }}
  />
);

const backIcon = (
  <Image
    source={require('../assets/images/icons/back.png')}
    style={{ height: 21, width: 21 }}
  />
);

export default class Icon extends PureComponent {
  render() {
    const { back, vehicle, distance, options, children } = this.props;

    if (back) return backIcon;
    if (vehicle) return vehicleIcon;
    if (distance) return distanceIcon;
    if (options) return optionsIcon;

    return children || null;
  }
}
