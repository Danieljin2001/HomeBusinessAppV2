import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CitySearchScreen from "../screens/CitySearch";
import HomeScreen from "../screens/Home";
import MapScreen from "../screens/Map";


import HomeTabNavigator from "./HomeTabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name={"Search City"}
                    component={CitySearchScreen}
                    options={{
                        //headerShown: false
                    }}
                />
                <Stack.Screen 
                    name={"Map Screen"}
                    component={MapScreen}
                    options={{
                        //headerShown: false
                    }}
                />
                <Stack.Screen 
                    name={"Post"}
                    component={PostScreen}
                    options={{
                        //headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;