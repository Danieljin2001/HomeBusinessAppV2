import React, {useState} from "react";
import { View, FlatList, TextInput, Text, Pressable, TouchableOpacity } from "react-native";
import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import color from "../../../../config/color";

import searchResults from '../../../../assets/data/search.js';

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
                <TouchableOpacity 
                    onPress= {() => naviation.navigate("Home")} 
                    style={styles.row}
                    activeOpacity= {0.5}
                >
                    <View style={styles.iconContainer}>
                        <Entypo name = {"location-pin"} size={30} color= {color.primary}/>
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text> 
                </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default CitySearchScreen;