import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/authScreens/splash';
import Login from '../screens/authScreens/login';

export default function AuthStack() {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >

            <Stack.Screen
            name='SpashScreen'
            component={Splash}
            />

            <Stack.Screen
            name='LoginScreen'
            component={Login}
            />

        </Stack.Navigator>
    )
}