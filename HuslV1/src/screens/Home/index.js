import React from "react";
import { 
    View, 
    ImageBackground, 
    Text,
    Pressable,
    TouchableHighlight,
    TouchableOpacity
 } from "react-native";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";


import { useNavigation } from "@react-navigation/native";

const HomeScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View> 
            <View style={styles.column}>
                <TouchableOpacity 
                    style={styles.searchButton}
                    onPress={() => navigation.navigate("Search City")}
                    activeOpacity={0.5}
                >
                    <Entypo name="location-pin" size={20} color={"black"}/>
                    <Text style={styles.searchButtonText}>Locate your city</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.findServiceButton}
                    onPress={() => navigation.navigate("Map Screen")}
                    activeOpacity= {0.5}
                >
                    <Text style= {styles.findServiceButtonText}>Find service</Text>
                </TouchableOpacity>
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