import React, { useState } from 'react';
import { LogBox, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './navigation/AuthStack';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  const[isLogin, setIsLogin] = useState(false)
  const[loginobject, setLoginobject] = useState({})

  useState(() => {
    AsyncStorage.getItem('userData').then((res) => {
      if (res !== null ) {
        setLoginobject(res)
      }
    });
  }, [])
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      {isLogin ? <Text>Home Stack</Text> : <AuthStack />}
      </NavigationContainer>
    </NativeBaseProvider>
  )
};

export default App;
