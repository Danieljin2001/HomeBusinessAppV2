import React from "react";
import { View, Text, Dimensions, SafeAreaView } from "react-native";
import styles from './styles';
import ActionSheet from "../../components/ActionSheet";


const {height} = Dimensions.get("window");

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