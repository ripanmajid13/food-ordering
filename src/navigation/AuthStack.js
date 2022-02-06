import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/authstack/LoginScreen'
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeStack" component={HomeStack} /> 
    </Stack.Navigator>
  );
};

export default AuthStack;
