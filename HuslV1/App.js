/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StatusBar} from 'react-native';
import Router from './src/navigation/Router';

import FindServiceScreen from './src/screens/Explore/FindService';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <Router />
      {/* <View> */}
      {/* <MapScreen/> */}
      {/* <HomeScreen/> */}
      {/* <SearchResultsScreen/> */}
      {/* <CitySearchScreen/> */}
        {/* <FindServiceScreen/> */}
      {/* </View> */}
    </>
  );
};

export default App;
