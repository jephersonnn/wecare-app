import React from 'react'
import AuthStack from '../src/navigation/authStack';
import AppNav from '../src/navigation/appNavigation';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AppNav/>
    </NavigationContainer>
  )
}