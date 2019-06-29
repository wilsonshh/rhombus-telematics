import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Screens from './Screens';

// Loading screen
export default createAppContainer(createSwitchNavigator({
  Main: Screens
}));