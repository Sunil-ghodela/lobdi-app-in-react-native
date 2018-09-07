import React, { Component } from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import screenOneStyle from '../styles/stackNavigatorScreen1';
import screenTwoStyle from '../styles/stackNavigatorScreen2';
import screenThreeStyle from '../styles/stackNavigatorScreen3';

type Props = {}
export default class StackNavigatorDemoScreen3 extends Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: `Welcome ${navigation.state.params.screen}`
    });

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={screenOneStyle.container}>
                <Text style={screenTwoStyle.titleText}>{params.screen}</Text>
                <TouchableHighlight
                    style={screenThreeStyle.button}
                    onPress={() => this.props.navigation.goBack()}>
                    <Text style={screenTwoStyle.buttonText}>Go Back</Text>
                </TouchableHighlight>
            </View>
        );
    }
};
