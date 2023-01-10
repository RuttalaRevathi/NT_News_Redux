/* eslint-disable prettier/prettier */
import React from 'react';
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Details from '../../screens/Details';
// import Details from '../../screens/NewsArticle';

import PhotoArticle from '../../screens/PhotoArticle';

import TopTabNavigator from '../TopTabNavigator';
import VideoArticle from '../../screens/VideoArticle';
import CartoonArticle from '../../screens/CartoonArticle';

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
      <Stack.Screen name="PhotoArticle" component={PhotoArticle} />
      <Stack.Screen name="VideoArticle" component={VideoArticle} />
      <Stack.Screen name="CartoonArticle" component={CartoonArticle} />


    </Stack.Navigator>
  )
};

export default HomeStackNavigator;
