import React, {useState} from "react";
import { View, Text, Animated, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import SearchResultsScreen from "../../screens/Explore/SearchResults";

const { height } = Dimensions.get("screen");

const ActionSheet = (props) => {
    const [alignment] = useState(new Animated.Value(0));

    //function to bring up the list
    const bringUpActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500
        }).start();
    };

    //function to hide the list
    const hideActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 0,
            duration: 500
        }).start();
    };

    const actionSheetIntropolate = alignment.interpolate({
        inputRange: [0,1],
        outputRange: [-height + 180, 0]
    });

    const actionSheetStyle = {
        bottom: actionSheetIntropolate
    };

    //trigger for swiping up/down
    const gestureHandler = (e) => {
        if(e.nativeEvent.contentOffset.y > 0)
            bringUpActionSheet();
        else if (e.nativeEvent.contentOffset.y < 0) 
            hideActionSheet();
    };

    return (
        <Animated.View style={[styles.container, {height: height}, actionSheetStyle]}>
            <View>
                <ScrollView 
                    onScroll={(e) => gestureHandler(e)}
                    style={[styles.grabber]} 
                >
                
                </ScrollView>
            </View>
            <View style={{marginTop: 20}}>
                <SearchResultsScreen/>
            </View>
        </Animated.View>
    );
};

export default ActionSheet;