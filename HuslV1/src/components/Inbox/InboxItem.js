import React from "react";
import { View, Text, Pressable, StyleSheet, Image} from "react-native";
 import { useNavigation } from "@react-navigation/native";
 
 export default function InboxItem({chat}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
            <Image source={{uri: chat.users[1].imageUri}} style={styles.image} />
            <View style={styles.unreadContainer}>
                <Text style={styles.unreadText}>4</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("Message Room", { name: chat.users[1].name })} style={styles.rightContainer}>
                <View style={styles.row}>
                   <Text style={styles.name}>{chat.users[1].name}</Text>
                    <Text style={styles.text}>{chat.lastMessage.createdAt}</Text>
                </View>
                <Text style={styles.text}>{chat.lastMessage.content}</Text>
            </Pressable>
        </View>
    );
 }

 const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white'
    },
    unreadContainer: {
        backgroundColor: 'teal',
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12.5,
        borderWidth: 1,
        borderColor: 'white',
        position: 'absolute',
        left: 58,
        top: 10
    },
    unreadText: {
        color: 'white'
    },
    rightContainer: {
        flex: 1,  
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontWeight: 'bold',
        padding: 2,
    },
    text: {
        color: 'grey', 
        padding: 2
    }
});