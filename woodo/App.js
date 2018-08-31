import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HomePage from './src/components/HomePage';


type Props = {};
export default class App extends Component <Props> {
  render() {
    return (
		<>
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to  Native!</Text>
			</View>
			<HomePage />
		</>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
	backgroundColor: '#009b86',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
	margin: 10,
	color: '#fff',
  },
});
