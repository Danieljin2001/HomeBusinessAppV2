import React from "react";
import { View, Text, Dimensions, SafeAreaView } from "react-native";
import styles from './styles';
import PostBottomSheet from "../../../components/BottomSheet";

const {height} = Dimensions.get("window");

const MapScreen = (props) => {
    return (
        <View style = {{height}}>
          <View style={styles.container}>
            <Text> Map hello</Text>
            <PostBottomSheet/>
          </View>
        </View>
    );
};

export default MapScreen;