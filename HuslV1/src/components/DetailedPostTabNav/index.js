import React from "react";
import {View, Text} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AboutMeScreen from "../AboutMe/index.js";
import MenuScreen from "../Menu/index.js";
import ReviewsScreen from "../Reviews/index.js";
import LocationScreen from "../Location/index.js";

const Tab = createMaterialTopTabNavigator();
const DetailedPostTabNav = () => {
    return (
    
        <Tab.Navigator
            initialRouteName="AboutMe"
            
            tabBarOptions={{
                activeTintColor: "black",
                labelStyle: {fontSize: 12},
                style:{backgroundColor: "white"}
            }}
        >
            <Tab.Screen
                name="AboutMe"
                component={AboutMeScreen}
                options={{tabBarLabel: "About Me"}}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{tabBarLabel: "Menu"}}
            />
            <Tab.Screen
                name="Location"
                component={LocationScreen}
                options={{tabBarLabel: "Location"}}
            />
            <Tab.Screen
                name="Reviews"
                component={ReviewsScreen}
                options={{tabBarLabel: "Reviews"}}
            />
            
        </Tab.Navigator>
        

    );
};

export default DetailedPostTabNav;