import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './navigation/BottomNavigation';

const App = () => {
  return (
    <>
    <NavigationContainer>
      <MyTabs />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
