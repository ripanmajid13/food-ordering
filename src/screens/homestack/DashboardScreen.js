import React, { useLayoutEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {
  drink_1,
  fries_2,
  hamburger_3,
  hotdog_4,
  burger_restaurant_1,
  baked_fries_2,
  hotdog_3,
  burger_4,
  pizza_5,
  cake_6,
  pasta_7,
} from '../../assets/Index';
import {Colors, SIZES} from '../../theme/index';
import {CloseIcon, Icon} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Dashboard",
      headerRight: () => (
        <TouchableOpacity onPress={() => logout()}>
          <CloseIcon size="4" mr="4"  style={{color: 'black', fontSize: 25, alignSelf: 'center'}} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  
  const foodimages = [
    {
      photo: burger_restaurant_1,
      name: 'Burger',
      price: '170.00',
      des: 'The Top Rated one of the best food ever',
      duration: '35-40',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
    },
    {
      photo: baked_fries_2,
      name: 'Fries',
      price: '60.00',
      des: 'One of the best food ever and ever and ever',
      duration: '35-40',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
    },
    {
      photo: hotdog_3,
      name: 'Hotdog',
      price: '70.00',
      des: 'One of the best food ever and ever and ever',
      duration: '35-40',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
    },
    {
      photo: burger_4,
      name: 'Small Burger',
      price: '80.00',
      des: 'One of the best food ever and ever and ever',
      duration: '35-40',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
    },
    {
      photo: pizza_5,
      name: 'Pizza',
      price: '100.00',
      des: 'One of the best food ever and ever and ever',
      duration: '35-40',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
    },
  ];

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.replace('AuthStack');
  };

  const renderfoodimg = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          marginTop: SIZES.padding * 2,
        }}
        onPress={() =>
          this.props.navigation.navigate('ItemDetail', {
            items: item,
          })
        }>
        <View
          style={{
            marginBottom: SIZES.padding,
            // width: "90%",
            // alignSelf: 'center',
            // alignItems:'center',
            // backgroundColor: 'red',
            // padding: 5
          }}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: '90%',
              height: 200,
              borderRadius: SIZES.radius * 2,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 18,
              height: 40,
              width: SIZES.width * 0.2,
              backgroundColor: Colors.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              ...styles.shadow,
            }}>
            <Text style={{fontSize: 15, lineHeight: 22}}>{item.duration}</Text>
          </View>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            paddingLeft: '6%',
          }}>{`${item.name} - ${item.price}`}</Text>
        <Text style={{paddingLeft: '6%', paddingTop: 5}}>{item.des}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.containerMenu}>
        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate('OrderScreen')}>
          <Text style={{ textAlign: 'center', fontSize: 15 }}>Order</Text>
        </TouchableOpacity>

        <View style={{ width: '5%' }}></View>

        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate('TrackingScreen')}>
          <Text style={{ textAlign: 'center', fontSize: 15 }}>Tracking</Text>
        </TouchableOpacity>

        <View style={{ width: '5%' }}></View>

        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate('ChatScreen')}>
          <Text style={{ textAlign: 'center', fontSize: 15 }}>Chat</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, paddingLeft: '6%', marginBottom: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Top Trending</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={foodimages}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderfoodimg}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: '70%',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    paddingVertical: 10
  },
  menuBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#49a4ab'
  },
  searchinput: {
    borderWidth: 1,
    padding: 10,
    width: "90%",
    alignSelf: 'center',
    borderRadius: 20,
  },
  searchicon: {
    color: 'gray',
    position: 'absolute',
    top: 6,
    right: 30,
    opacity: 0.7
  }
})

export default DashboardScreen;
