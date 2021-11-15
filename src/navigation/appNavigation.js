import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/appScreens/home';
import NoficationScreen from '../screens/appScreens/notification';
import ListeningB from '../screens/appScreens/listeningBd';
import CalendarScreen from '../screens/appScreens/calendar';

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name == 'Home') {
                        iconName = 'home-outline'
                        size = focused ? 28 : 25
                    }
                    else if (route.name == 'Notifications') {
                        iconName = 'bell-outline'
                        size = focused ? 28 : 25
                    } else if (route.name == 'Listening buddies') {
                        iconName = 'phone-in-talk-outline'
                        size = focused ? 28 : 25
                    } else if (route.name == 'Calendar') {
                        iconName = 'calendar-month-outline'
                        size = focused ? 28 : 25
                    }

                    return (
                        <MaterialIcons
                            size={size}
                            name={iconName}
                            color={color}
                        />
                    )

                }
            })}
            activeColor='#fabe37'
            inactiveColor='#fff'
            barStyle={{ backgroundColor: '#2c4f95', borderTopWidth: 3, borderTopColor: '#fabe37' }}
        >

            <Tab.Screen
                name='Home'
                component={HomeScreen}
            />

            <Tab.Screen
                name='Notifications'
                component={NoficationScreen}
            />

            <Tab.Screen
                name='Listening buddies'
                component={ListeningB}
            />

            <Tab.Screen
                name='Calendar'
                component={CalendarScreen}
            />

        </Tab.Navigator>
    )
}