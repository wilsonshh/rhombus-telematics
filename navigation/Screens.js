import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import OverviewStack from './Overview';
import Detail from '../screens/Detail';


export default createDrawerNavigator({
  OverviewStack,
  Detail
});
