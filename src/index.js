import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";

import batatinha from './pages/batatinha.js';

const AuthStack = createStackNavigator({ batatinha });

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthStack
        },
        {
            initialRouteName: "AuthStack"
        }
    )
);


