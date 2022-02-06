
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack'
import DashboardScreen from '../screens/homestack/DashboardScreen'
import ChatScreen from '../screens/homestack/ChatScreen'
import OrderScreen from '../screens/homestack/OrderScreen'
import TrackingScreen from '../screens/homestack/TrackingScreen'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="TrackingScreen" component={TrackingScreen} />
      <Stack.Screen 
        name="AuthStack" 
        component={AuthStack} 
        options={{
          headerShown: false
        }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
