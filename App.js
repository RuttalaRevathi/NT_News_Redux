/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigation/stack-navigators/HomeStackNavigator';
import {store} from './src/redux/store';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
             <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
