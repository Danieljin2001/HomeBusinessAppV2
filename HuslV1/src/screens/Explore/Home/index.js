import React from "react";
import { 
    SafeAreaView,
    View, 
    ImageBackground, 
    Text,
    Pressable,
    TouchableHighlight,
    TouchableOpacity
 } from "react-native";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";


import { useNavigation } from "@react-navigation/native";

const HomeScreen = (props) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex:1}}> 
            {/* locate city button and find service button and logo*/}
            <View style={styles.column}>
                <Ionicons name="map" size= {200} color={"black"} style={{marginBottom: 30}}/>
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
            <View style={{flex: 1, marginHorizontal: 20}}>
                <Text style={{fontSize: 35, fontWeight:"400", marginTop: 30}}>Begin by{"\n"}searching for a</Text>
                <Text style={{fontSize: 45, fontWeight: "bold"}}>home-based</Text>
                <Text style={{fontSize: 35, fontWeight:"400"}}>service in your city.</Text>
            </View>
            
            {/* <ImageBackground 
                source={require('../../../assets/images/wallpaper.png')} 
                style={styles.image}
            >
                <Text style={styles.title}>Husl.</Text>
            </ImageBackground> */}
        </SafeAreaView>
    );
}

export default HomeScreen;