import React, { Component } from 'react';
import { Animated, Text, View, Image, Easing } from 'react-native';

type Props = {}
export default class AnimatedApiDemoImage extends Component<Props> {
    state = {
        spinValue: new Animated.Value(0),
    };

    componentDidMount() {
        this.spin();
    };

    spin = () => {
        // this.setState({
        //     spinValue: this.state.spinValue.setValue(0)
        // })
        Animated.timing(
            this.state.spinValue,
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