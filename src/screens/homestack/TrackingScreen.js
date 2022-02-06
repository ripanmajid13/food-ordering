import React, { useLayoutEffect } from 'react';
import { Text } from 'react-native';

const TrackingScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Tracking",
    });
  }, [navigation]);

  return <Text>TrackingScreen</Text>;
};

export default TrackingScreen;