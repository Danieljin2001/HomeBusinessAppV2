//used in DetailedPost
import React from "react";
import {View, Text, SafeAreaView} from "react-native";

import { CollapsibleScrollView } from '@r0b0t3d/react-native-collapsible';



const AboutMeScreen = (props) =>{
    
    return (
        <CollapsibleScrollView>
            <Text>Description: "Hi blah blah blah blah"</Text>
            <Text>Links: dfsadfsdfsfds</Text>
            <Text>Email: button</Text>
        </CollapsibleScrollView>

    );
};

export default AboutMeScreen;