import React, { Component } from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import listViewStyle from '../styles/listViewStyle';


type Props = {}
export default class ListView extends Component <Props> {
    state = {
        names: [
           {
              id: 0,
              name: 'Ben',
           },
           {
              id: 1,
              name: 'Susan',
           },
           {
              id: 2,
              name: 'Robert',
           },
           {
              id: 3,
              name: 'Mary',
           }
        ]
    }
    alertItemName = ( item ) => {
        alert(item.name);
    }


    render() {
        console.log('sunil');
        return (
            <View>
                {
                    this.state.names.map( (item, index) => {
                        <TouchableOpacity
                            key = {item.id}
                            style = {listViewStyle.container}
                            onPress = {() => this.alertItemName(item)}
                        >
                            <Text style = {listViewStyle.text} >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    })
                }
            </View>        
        )
    }
}