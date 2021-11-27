import React from "react";
import { View, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InboxItem from "../../../components/Inbox/InboxItem";

const InboxScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}> 
            <InboxItem name="User 1"/>
            <InboxItem name="User 2"/>
            <InboxItem name="User 3"/>
        </View>
    );
}

export default InboxScreen;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white'
    }
})