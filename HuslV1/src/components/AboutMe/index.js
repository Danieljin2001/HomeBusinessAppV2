//used in DetailedPost
import React from "react";
import {View, Text, SafeAreaView} from "react-native";


const AboutMeScreen = (props) =>{
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center",
            alignItems:"center",
           }}
        >
            <Text>About Me Screen</Text>
        </SafeAreaView>
    );
};

export default AboutMeScreen;