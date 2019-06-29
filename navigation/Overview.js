import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Overview from '../screens/Overview';
import Detail from '../screens/Detail';


export default createStackNavigator({
  Overview,
  Detail
})