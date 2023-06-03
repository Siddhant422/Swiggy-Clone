import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ProfilePage from '../screens/ProfilePage';
import Accoount from '../screens/Accoount';






const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Accoount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
