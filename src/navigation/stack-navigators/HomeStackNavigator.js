/* eslint-disable prettier/prettier */
import React from 'react';
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Details from '../../screens/Details';
import TopTabNavigator from '../TopTabNavigator';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={TopTabNavigator} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
};

export default HomeStackNavigator;
