import React, { useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

const ChatScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          title: "Chat",
        });
      }, [navigation]);

    return (
        <SafeAreaView style= {styles.maincontainer}>
            <View
            style={styles.container}
            >
                <Icon 
                type= "MaterialIcons"
                name= "keyboard-arrow-left"
                style= {{
                    fontSize: 40,
                    color: '#191919',
                }}
                onPress= {()=> this.props.navigation.goBack()}
                />
                <Text style={{
                    fontSize: 20,
                    width: "100%",
                    marginLeft: "35%"
                }}>Chat</Text>
            </View>
            <View
            style={styles.inputStyle}
            >
                <TextInput 
                placeholder= "Type text...."
                style= {{height: 30, fontSize: 18}}
                />

                <TouchableOpacity>
                    <Icon 
                    type= "MaterialCommunityIcons"
                    name= "send"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles =  StyleSheet.create({
    maincontainer: {
        flex: 1, 
        backgroundColor: '#F0F8FF'
      },
    container: {
      alignItems: 'center',
      width: '100%',
      alignSelf: 'center',
      borderBottomWidth: 0.5,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      flexDirection: 'row',
    },
    inputStyle: {
      position: 'absolute',
      bottom: 20,
      borderTopWidth: 0.5,
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  });

export default ChatScreen;
