import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import scrollView2Style from '../styles/scrollView2Style';

export default class ScrollViewDemo2 extends Component<Props> {
    state = {
        names : [
            {'name': 'Ben', 'id': 1},
            {'name': 'Susan', 'id': 2},
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
        ]
    }

    render() {
        return(
            <View>
                <ScrollView>
                    {this.state.names.map((name, index) => {
                        <View key = {name.id} style = {scrollView2Style.item}>
                            <Text>
                                {name.name}
                            </Text>
                        </View>
                    })}
                </ScrollView>
            </View>
        )
    }
}