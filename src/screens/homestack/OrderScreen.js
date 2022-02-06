import React, { useLayoutEffect } from 'react';
import { CheckIcon, FormControl, Select, WarningOutlineIcon } from 'native-base';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import getFood from './data/food'
import { Colors } from '../../theme';

const OrderScreen = ({ navigation }) => {
  let [food, setFood] = React.useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Order",
    });
  }, [navigation]);

  return (
    <>
    <SafeAreaView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10}}>
        <ScrollView>
          <FormControl isRequired isInvalid={false}>
            <FormControl.Label>Choose Food</FormControl.Label>

             <Select selectedValue={food} minWidth="200" accessibilityLabel="Choose Food" placeholder="Choose Food" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
              }} mt={1} onValueChange={itemValue => setFood(itemValue)}>
                {getFood.map((v) => {
                  return (<Select.Item label={v.name} value={v.id} />);
                })}
              </Select>

            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>

          <TouchableOpacity style={{
            marginTop: "10%",
            width: '80%',
            height: 50,
            alignSelf: 'center',
            backgroundColor: Colors.CardFourth,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20
          }} onPress={() => alert('success')}>
            <Text style={{fontSize: 22, color: Colors.white}}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
    </>
  );
};

export default OrderScreen;
