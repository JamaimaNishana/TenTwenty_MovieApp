import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
}