import React from "react";
import { View, Text, Dimensions, SafeAreaView } from "react-native";
import styles from './styles';
import ActionSheet from "../../../components/ActionSheet";
import MapView from 'react-native-maps';


// const {height} = Dimensions.get("window");
const initRegion = {
  latitude: 51.0447,
  longitude: -114.0719,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const MapScreen = (props) => {
    return (
      <View style={styles.container}>
        <MapView 
          initialRegion={ initRegion }
          style={styles.map} />
      </View>
    );
};

export default MapScreen;