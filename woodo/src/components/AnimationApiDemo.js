import React, { Component } from 'react';
import {  Animated, Text, View } from 'react-native';

type Props = {}
export default class AnimatedApiDemo extends Component<Props> {
    state = {
        fadeAnim: new Animated.Value(0),
    };

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 10000,
            }
        ).start();
    }

    render() {
       let  { fadeAnim } = this.state;
        return(
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}