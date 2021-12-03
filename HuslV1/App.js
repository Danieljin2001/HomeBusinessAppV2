/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar} from 'react-native';
import Router from './src/navigation/Router';

const App = () => {
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
