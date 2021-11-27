import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

function Reviews(){
    return(
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white"
        }}>
            <Text style={{fontSize: 20, color: "black", fontWeight: "800"}}>
                This is Reviews hello
            </Text>
        </SafeAreaView>
    )
}

function MyReviews(){
    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white"
        }}>
            <Text style={{fontSize: 20, color: "black", fontWeight: "800"}}>
                This is MyReviews
            </Text>
        </View>
    )
}


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        // <SafeAreaView>
            <Tab.Navigator
                initialRouteName="ReviewsOfMe"
                tabBarOptions={{
                    activeTintColor: 'black',
                    labelStyle: { fontSize: 12},
                    style: {backgroundColor: "white", marginTop: 30}
                }}
            >
                <Tab.Screen
                    name="ReviewsOfMe"
                    component={Reviews}
                    options={{tabBarLabel: "Reviews"}}
                />
                <Tab.Screen
                    name="MyReviews"
                    component={MyReviews}
                    options={{tabBarLabel: "My Reviews"}}
                />
            </Tab.Navigator>

        // </SafeAreaView>
    );
}

const ReviewsScreen = (props) => {
    return (
        <MyTabs/>
    );
}

export default ReviewsScreen;