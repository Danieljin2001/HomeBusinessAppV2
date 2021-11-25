import React, {useState} from "react";
import { View, FlatList, TextInput, Text, Pressable } from "react-native";
import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

import searchResults from '../../../assets/data/search.js';

const CitySearchScreen = (props) => {

    const [inputText, setInputText] = useState(''); //so get what isg getting put into the text input box (inputText = value, setInputText = updates the value)

    const naviation = useNavigation();

    return (
        <View style={styles.container}>
            {/* input component */}
            <TextInput
                style={styles.textInput}
                placeholder="Find your city"
                value={inputText}
                onChangeText={setInputText}
            />

            {/* list of city */}
            <FlatList
                data={searchResults}
                renderItem={ ({item}) => (
                <Pressable onPress= {() => naviation.navigate("Home")} style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name = {"location-pin"} size={30}/>
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text> 
                </Pressable>
                )}
            />
        </View>
    );
};

export default CitySearchScreen;