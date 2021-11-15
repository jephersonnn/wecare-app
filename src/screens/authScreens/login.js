import React from 'react';
import { 
    View, 
    Image, 
    TextInput, 
    StyleSheet,
    TouchableOpacity,
    Text 
} from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import * as Animatable from 'react-native-animatable';

export default function Login() {
    return (
        <Animatable.View
            style={globalStyles.globalContainer}
            animation='zoomInDown'
        >
            <Image
                style={globalStyles.loginImage}
                source={require('../../assets/WeCare.png')}
                resizeMode='stretch'
            />

            <TextInput
                style={styles.input}
                placeholder='Email'
            />

            <TextInput
                style={styles.input}
                placeholder= 'Password'
            />

            <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('pressed!')}
            >
                <Text
                style={{fontSize: 16, color: '#fff'}}
                >
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => console.log('Pressed!')}
            >
                <Text
                style={{fontSize: 18, color: '#E7911D', margin: 5}}
                >
                    Forgot Password?
                </Text>
            </TouchableOpacity>


        </Animatable.View>
    )
}

const styles = StyleSheet.create({

    input: {
        width: 300, 
        height: 45, 
        margin: 5
    },

    button: {
        width: 300,
        height: 45,
        backgroundColor: '#2C4F95',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 5
    }
})