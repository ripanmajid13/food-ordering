import React, { useState } from 'react';
import { ActivityIndicator, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Box, Button, FormControl, Input, WarningOutlineIcon } from 'native-base';
import { View as AnimatableView } from 'react-native-animatable';
import { Colors } from '../../theme';
import Toast from 'react-native-simple-toast';

const LoginScreen = ({ navigation }) => {
  const[username, setUsername] = useState('ripan')
  const[password, setPassword] = useState('1234567')
  const[errors, setErrors] = useState({})
  const[show, setShow] = useState(false)
  const[visible, setVisible] = useState(true)
  const[isloading, setIsloading] = useState(false)

  const changeIcon = () => {
    setShow(!show)
    setVisible(!visible)
  };

  const loginbtnvalidation = () => {
    let errors = {};
    let isValid = true;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!username) {
      isValid = false;
      errors['username'] = 'please enter username';
    } else {
      null;
    }

    if (!password) {
      isValid = false;
      errors['password'] = 'Please enter Password';
    } else if (password.length <= 5) {
      isValid = false;
      errors['password'] = 'password must be atleast 7 characters ';
    } else {
      null;
    }

    setErrors(errors)

    return isValid;
  };

  const loginbtn = () => {
    if (loginbtnvalidation()) {
      setIsloading(true)

      // AsyncStorage.setItem('userData', JSON.stringify(userData));

      setTimeout(() => {
        setUsername('')
        setPassword('')
        navigation.replace('HomeStack');
      }, 1000);
    } else {
      setIsloading(false)
      Toast.show('Fill all details', Toast.LONG);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainview}>
          <AnimatableView animation="fadeInDownBig" style={styles.title}>
            <Text style={styles.titleText}>Food Ordering</Text>
          </AnimatableView>

          <View style={styles.taxtInputView}>
            <Box alignItems="center">
              <FormControl isInvalid={errors.username != undefined ? true : false}>
                <FormControl.Label>Username</FormControl.Label>
                <Input 
                  placeholder="Enter username" 
                  size={'md'}
                  value={username}
                  labelStyle={styles.inputPlaceholder}
                  onChangeText={(value) => setUsername(value)}
                  />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errors.username}
                </FormControl.ErrorMessage>
              </FormControl>
            </Box>
          </View>

          <View style={styles.taxtInputView}>
            <Box alignItems="center">
              <FormControl isInvalid={errors.password != undefined ? true : false}>
                <FormControl.Label>Password</FormControl.Label>
                <Input 
                  size={'md'} 
                  value={password}
                  labelStyle={styles.inputPlaceholder}
                  onChangeText={(value) => setPassword(value)}
                  secureTextEntry={visible}
                  type={!show ? "text" : "password"} 
                  InputRightElement={
                    <Button 
                      size="md" 
                      rounded="none" 
                      w="1/6" 
                      h="full" 
                      onPress={() => changeIcon()}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  } 
                  placeholder="Enter password" 
                  />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>
            </Box>
          </View>

          <TouchableOpacity style={styles.signinbtn} onPress={() => loginbtn()}>
            <Text style={{fontSize: 22, color: Colors.white}}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <Modal
        transparent={true}
        animationType={'none'}
        visible={isloading}>
        <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator
                animating={true}
                color="#000000"
                size="large"
                style={styles.activityIndicator} />
            </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.CardsBackground,
  },
  mainview: {
      width: "100%"
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '10%',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.CardFourth,
  },
  taxtInputView: {
    marginTop: "5%",
    marginBottom: 5,
    marginHorizontal: 20
  },
  inputPlaceholder: {
      color: Colors.InputLabel
  },
  signinbtn: {
     marginTop: "10%",
     width: '80%',
     height: 50,
     alignSelf: 'center',
     backgroundColor: Colors.CardFourth,
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 20
  },
  errorwarning: {
      color: 'red'
  },
  modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040',
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      height: 100,
      width: 100,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    },
})

export default LoginScreen;
