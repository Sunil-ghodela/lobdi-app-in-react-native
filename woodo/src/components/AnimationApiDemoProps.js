import React, { Component } from 'react';
import {  Animated, Text, View } from 'react-native';

type Props = {}
export default class AnimatedApiDemoImage extends Component<Props> {
    state = {
        animatedValue: new Animated.Value(0),
    };

    componentDidMount() {
        this.animate();
    };

    animate = () => {
        this.setState({
            animatedValue: this.state.animatedValue.setValue(0)
        })
        Animated.timing(
            this.state.animatedValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start();
    }

    render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View style={
                {flex: 1,
                justifyContent: 'center',
                alignItems: 'center'}
            }>
                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform: [{ rotate: spin }]
                    }}
                    source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
                />
            </View>
        )
    }
}