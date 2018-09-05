import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import InputFieldStyle from '../styles/inputFieldStyle';

type Props = {}
export default class InputFieldDemo extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    login = (email, pass) => {
        alert(`Email: ${email} Password: ${pass}`);
    };

    render() {
        return (
            <View style={InputFieldStyle.container}>
                <TextInput style={InputFieldStyle.input}
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="characters"
                    clearTextOnFocus= "true"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput style={InputFieldStyle.input}
                    placeholder="Password"
                    clearTextOnFocus= "true"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableOpacity
                    style={InputFieldStyle.submitButton}
                    onPress={
                        this.login.bind(this.state.email, this.state.password)
                    }
                >
                    <Text style={InputFieldStyle.submitButtonText}> Submit me</Text>
                </TouchableOpacity>
            </View>
        )
    }
}