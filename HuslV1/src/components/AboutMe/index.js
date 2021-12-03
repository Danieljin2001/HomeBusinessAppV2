//used in DetailedPost
import React from "react";
import {View, Text, SafeAreaView} from "react-native";

//dummy data
import feed from "../../../assets/data/feed";
import { CollapsibleScrollView } from '@r0b0t3d/react-native-collapsible';
import Post from "../Post";


const AboutMeScreen = (props) =>{
    
    return (
        <CollapsibleScrollView>
            <Text> Hello</Text>
        </CollapsibleScrollView>

    );
};

export default AboutMeScreen;