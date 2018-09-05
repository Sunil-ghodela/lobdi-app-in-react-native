import React, { Component } from 'react';
import { ScrollView } from 'react-native';


export default class ScrollViewDemo extends Component<Props> {
    render() {
        return(
            <ScrollView
                contentContainerStyle={{
                flex: 1,
                justifyContent: 'space-between'
                }}>
                
            </ScrollView>
        )
    }
};