import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { TextInput, BaseButton } from 'react-native-gesture-handler';

class Login extends Component {







    render() {
        return (
            <ImageBackground



                source={require("../assets/img/loginback.jpg")}
                style={StyleSheet.absoluteFillObject}
            >
                <View style={style.overlay} />
                <View style={style.main}>
                    <TextInput
                        placeholder="Email"
                        underlineColorAndroid="#16ca8f"
                        style={style.inputLogin}

                    />

                    <TextInput
                        style={style.inputLogin}
                        placeholder="Senha"
                        password="true"
                        underlineColorAndroid="#16ca8f"
                    />


                    <Button
                        title="Login"
                        color="#16ca8f"
                    />



                </View>
            </ImageBackground>
        );
    }
}



const style = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(22, 202, 143, 0.29)"
    },
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    inputLogin: {
        width: 340,
        marginBottom: 20,
        fontSize: 10,

    },

    btnLogin: {

    }
});

export default Login;