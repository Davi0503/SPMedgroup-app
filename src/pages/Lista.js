import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Container, Content, Card, CardItem, Text} from 'native-base';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Card Header</Text>
                        </CardItem>

                        <CardItem>
                            <Text>
                                //Your text here
                            </Text>
                        </CardItem>

                        <CardItem header>
                            <Text>Card Footer</Text>
                        </CardItem>
                   </Card>                   
                </Content>
            </Container>
        );
    }
}