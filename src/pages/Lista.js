import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends Component {
    render() {
        return (

            <View>
                <TextInput
                    placeholder="senha"
                    underlineColorAndroid="#FFFFFF"

                />

                <TextInput                    
                    placeholder="senha"
                    placeholderTextColor="#FFFFFF"
                    password="true"
                    underlineColorAndroid="#FFFFFF" />



                <Text>Funcionei!</Text>
            </View>
        );
    }
}