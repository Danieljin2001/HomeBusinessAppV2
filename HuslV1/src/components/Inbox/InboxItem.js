import React from "react";
import { View, Text, Pressable, StyleSheet, Image} from "react-native";
 import { useNavigation } from "@react-navigation/native";
 
 export default function InboxItem({name}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
            <Image source={{uri: 'https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg'}} style={styles.image} />
            <Pressable onPress={() => navigation.navigate("Message Room", { name: name })} style={styles.rightContainer}>
                <View style={styles.row}>
                   <Text style={styles.name}>{name}</Text>
                    <Text style={styles.text}>9:30 AM</Text>
                </View>
                <Text style={styles.text}>This is a text message test test test</Text>
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