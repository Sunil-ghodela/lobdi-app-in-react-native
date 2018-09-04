import React, { Component } from 'react';
import { 
    ActivityIndicator, 
    Text, 
    View
} from 'react-native';

export default class ActivityIndicatorDemo extends Component {
    render() {
        return(
            <View>
                <ActivityIndicator size="large" color="#009b86" />
            </View>
        )
    }
}