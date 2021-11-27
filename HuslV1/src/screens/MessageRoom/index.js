import React from "react";
import { View, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MessageRoom = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
        </View>
    );
}

export default MessageRoom;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white'
    }
})