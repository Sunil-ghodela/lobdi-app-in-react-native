import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

type Props = {}

export default class HomePage extends Component <Props> {
    render() {
        return (
            <View style={styles.homeContainer}>
                <Text>
                    Blub for do nothing.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});