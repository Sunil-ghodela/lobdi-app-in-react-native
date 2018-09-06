import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HomePage from './src/components/HomePage';
import ListViewDemo from './src/components/ListView';
import AnimatedApiDemo from './src/components/AnimationApiDemo';
import ActivityIndicatorDemo from './src/components/ActivityIndicator';
import FlatListDemo from './src/components/FlatList';
import InputFieldDemo from './src/components/InputField';
import ScrollViewDemo2 from './src/components/ScrollView2';

import homePageStyle from './src/styles/homePageStyle';
import animationDemoStyle from './src/styles/animationDemoStyle';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (    
	    <>
            <View style={homePageStyle.homeContainer} >

                <AnimatedApiDemo style={animationDemoStyle.animationContainer}>

                    <Text style={animationDemoStyle.animatonTextComingSoon}>Coming soon</Text>

                </AnimatedApiDemo>

            </View>
	    </>
    );
  }
}