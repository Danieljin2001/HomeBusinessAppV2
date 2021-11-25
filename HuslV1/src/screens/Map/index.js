import React from "react";
import { View, Text, Dimensions } from "react-native";
import styles from './styles';
import ActionSheet from "../../components/ActionSheet";


const {height} = Dimensions.get("screen");

const MapScreen = (props) => {
    return (
        <View style = {{height}}>
          <View style={styles.container}>
            <Text> Map </Text>
          </View>
          <ActionSheet/>
        </View>
    );
};

export default MapScreen;