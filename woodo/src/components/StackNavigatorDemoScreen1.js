import React, { Component } from 'react';
import { Animated, Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import screenOneStyle from '../styles/stackNavigatorScreen1';

type Props = {}
export default class StackNavigatorDemoScreen1 extends Component<Props> {
    static navigationOptions = {
        title: "Welcome"
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(this.props);
        return (
            <View style={screenOneStyle.container}>
                <TouchableHighlight
                    onPress={() => navigate("ScreenTwo", { screen: "Click on Go Back or" })}
                    style={screenOneStyle.button}>
                    <Text
                        style={screenOneStyle.buttonText}>Next... </Text>
                </TouchableHighlight>
            </View>
        )
å
    }
}