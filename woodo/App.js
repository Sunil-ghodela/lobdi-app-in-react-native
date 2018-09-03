import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/components/HomePage';
import ListView from './src/components/ListView';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (    
		<>
			<HomePage />
			<ListView />
		</>
    );
  }
}