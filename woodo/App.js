import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HomePage from './src/components/HomePage';
import ListViewDemo from './src/components/ListView';
import AnimatedApiDemo from './src/components/AnimationApiDemo';
import ActivityIndicatorDemo from './src/components/ActivityIndicator';
import FlatListDemo from './src/components/FlatList';
import InputFieldDemo from './src/components/InputField';
import ScrollViewDemo2 from './src/components/ScrollView2';
import AnimatedApiDemoImage from './src/components/AnimationApiDemoImage';


import StackNavigatorDemo from './src/components/StackNavigator';


import homePageStyle from './src/styles/homePageStyle';
import animationDemoStyle from './src/styles/animationDemoStyle';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (    
	    <>
            <View style={homePageStyle.homeContainer} >

                
               <StackNavigatorDemo />

            </View>
	    </>
    );
  }
}