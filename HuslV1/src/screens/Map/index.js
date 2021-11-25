import React from "react";
import { View, Text, Dimensions, SafeAreaView } from "react-native";
import styles from './styles';
import ActionSheet from "../../components/ActionSheet";


const {height} = Dimensions.get("window");

const MapScreen = (props) => {
    return (
        <SafeAreaView style = {{height}}>
          <View style={styles.container}>
            <Text> Map </Text>
          </View>
          <ActionSheet/>
        </SafeAreaView>
    );
};

export default MapScreen;