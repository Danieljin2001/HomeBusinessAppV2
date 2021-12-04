//Used in DetailedPost
import React from "react";
import {View, Text} from "react-native";
import { CollapsibleFlatList } from "@r0b0t3d/react-native-collapsible";


const MenuScreen = (props) =>{
    const post = props.post;
    return (
        <View>
            <Text>{post.menu}</Text>
        </View>
    );
};

export default MenuScreen;