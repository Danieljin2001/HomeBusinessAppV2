import React from "react";
import { View, StyleSheet, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InboxItem from "../../components/Inbox/InboxItem";
import inboxData from '../../../assets/chat-mock-data/Inbox'

const InboxScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}> 
            <FlatList
                data={inboxData}
                renderItem={({item}) => <InboxItem chat={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View> 
    );
}

export default InboxScreen;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white'
    }
}) 