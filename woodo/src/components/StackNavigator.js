import React, { Component } from 'react';
import { Animated, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import StackNavigatorDemoScreen1 from './StackNavigatorDemoScreen1';
import StackNavigatorDemoScreen2 from './StackNavigatorDemoScreen2';
import StackNavigatorDemoScreen3 from './StackNavigatorDemoScreen3';


const StackNavigatorDemo = StackNavigator({

    ScreenOne: { screen: StackNavigatorDemoScreen1 },
    ScreenTwo: { screen: StackNavigatorDemoScreen2 },
    ScreenThree: { screen: StackNavigatorDemoScreen3 }

});

export default StackNavigatorDemo;

