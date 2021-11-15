import React from 'react';
import { View, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import * as Animatable from 'react-native-animatable';

export default function Splash({navigation}) {
    setTimeout(() => {
        navigation.replace('LoginScreen');
    }, 5000
    );
    return (
        <View
            style={globalStyles.globalContainer}
        >
            <Animatable.Image
                animation='zoomIn'
                style={globalStyles.splashImage}
                source={require('../../assets/WeCare.png')}
                resizeMode='stretch'
            />
        </View>
    )
}