import React, { Component } from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import homePageStyle from '../styles/homePageStyle';

type Props = {}
export default class HomePage extends Component <Props> {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
        }
    }

    onPress =  () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        return (
            <View style = {homePageStyle.homeContainer} >
                <TouchableOpacity 
                    style = {homePageStyle.homeButton}
                    onPress = {this.onPress}
                >
                    <Text>Press me</Text>
                    <View style = {homePageStyle.homeCountContainer}>
                        <Text style = {homePageStyle.homeCountText}>
                            {this.state.count !== 0 ? this.state.count : null}
                        </Text>

                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}
