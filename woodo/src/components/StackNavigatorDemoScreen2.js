// @flow

import React, { Component } from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import screenOneStyle from '../styles/stackNavigatorScreen1';
import screenTwoStyle from '../styles/stackNavigatorScreen2';

type Props = {}
export default class StackNavigatorDemoScreen2 extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Welcome ${navigation.state.params.screen}`,
        }
    }

    render() {
        const { state, navigate } = this.props.navigation;
        return (
            <View style={screenOneStyle.container}>
                <Text style={screenTwoStyle.titleText}>{state.params.screen}</Text>

                <View style={screenTwoStyle.buttonContainer}>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.goBack()}
                        style={[screenTwoStyle.button, { backgroundColor: '#C56EE0' }]}>
                        <Text style={screenTwoStyle.buttonText}>Go Back</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => navigate("ScreenThree", { screen: "Now pls. go back" })}
                        style={[screenTwoStyle.button, { backgroundColor: '#8E84FB' }]}>
                        <Text style={screenTwoStyle.buttonText}>Next</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}