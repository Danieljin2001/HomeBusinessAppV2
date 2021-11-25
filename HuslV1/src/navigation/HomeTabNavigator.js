import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home"; 
import Feather from 'react-native-vector-icons/Feather';
import { color } from "react-native-reanimated";
import PostScreen from "../screens/PostScreen";
import InboxScreen from "../screens/Inbox"


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'black',
        }}>
            <Tab.Screen 
                name={"Explore"}
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <Feather name="search" size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name={"Favourites"}
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <Feather name="heart" size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name={"Reviews"}
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <Feather name="star" size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name={"Inbox"}
                component={InboxScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="message-square" size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name={"Profile"}
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <Feather name="user" size={25} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;
