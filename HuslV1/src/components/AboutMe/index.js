//used in DetailedPost
import React from "react";
import {View, Text, StyleSheet} from "react-native";

import { CollapsibleScrollView } from '@r0b0t3d/react-native-collapsible';



const AboutMeScreen = (props) =>{
    const post = props.post;
    
    return (
        <CollapsibleScrollView>
            <View style= {styles.container}>
                <Text style={styles.descriptionTitle}>Description:</Text>
                <View style={styles.elementContainer}>
                    <View style={{flex: 3, borderWidth: 0, borderColor: "lightgrey"}}>
                        <Text style={{marginVertical: 3}}>Dami Cuts welcomes you!{"\n"}Qualified hairbarber that started in 2010</Text>
                    </View>
                </View>
                <Text style={styles.descriptionTitle}>Links:</Text>
                <View style={styles.elementContainer}>
                    <View style={{flex: 3, borderWidth: 0, borderColor: "lightgrey"}}>
                        <Text style={{marginVertical: 3}}>Instragram: https://github.com/r0b0t3d/react-native-collapsible/blob/main/example/src/screens/CollapsibleList/index.tsx</Text>
                    </View>
                </View>
            </View>
        </CollapsibleScrollView>

    );
};

export default AboutMeScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    descriptionTitle: {
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 14,
    },
    elementContainer: {
        //flex: 1,
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "flex-start",
        marginBottom: 20,
    }

});