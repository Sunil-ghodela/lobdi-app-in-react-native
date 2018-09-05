import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HomePage from './src/components/HomePage';
import ListViewDemo from './src/components/ListView';
import ActivityIndicatorDemo from './src/components/ActivityIndicator';
import FlatListDemo from './src/components/FlatList';
import ScrollViewDemo2 from './src/components/ScrollView2';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (    
	// <>
	// 	<View>
	// 			{/* <HomePage /> */}
	// 			{/* <ListView /> */}
	// 			{/* <ActivityIndicatorDemo /> */}
	// 			{/* <FlatListDemo /> */}
	// 		<ScrollViewDemo2 />
	// 	</View>
	// </>
	<View>
		<FlatListDemo /> 
		<HomePage />
	</View>
	
	// <ScrollViewDemo2 />
    );
  }
}