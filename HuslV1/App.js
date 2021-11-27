/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import { StatusBar, SafeAreaView, View, Text, Dimensions } from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import CitySearchScreen from './src/screens/CitySearch';
// import ActionSheet from './src/components/ActionSheet';
import Router from './src/navigation/Router';
// import MapScreen from './src/screens/Map';

const { width, height} = Dimensions.get("screen");

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <Router />
      {/* <SafeAreaView> */}
      {/* <MapScreen/> */}
      {/* <HomeScreen/> */}
      {/* <SearchResultsScreen/> */}
      {/* <CitySearchScreen/> */}
      {/* </SafeAreaView> */}
    </>
  );
};

export default App;
