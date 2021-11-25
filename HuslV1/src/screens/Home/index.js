import React from "react";
import { 
    View, 
    ImageBackground, 
    Text,
    Pressable,
    
 } from "react-native";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";


import { useNavigation } from "@react-navigation/native";

const HomeScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View> 
            <View style={styles.column}>
                <Pressable 
                    style={styles.searchButton}
                    onPress={() => navigation.navigate("Search City")}
                >
                    <Entypo name="location-pin" size={20} color={"black"}/>
                    <Text style={styles.searchButtonText}>Locate your city</Text>
                </Pressable>

                <Pressable
                    style={styles.findServiceButton}
                    onPress={() => navigation.navigate("Map Screen")}
                >
                    <Text style= {styles.findServiceButtonText}>Find service</Text>
                </Pressable>
            </View>
            <ImageBackground 
                source={require('../../../assets/images/wallpaper.png')} 
                style={styles.image}
            >
                <Text style={styles.title}>Husl.</Text>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;