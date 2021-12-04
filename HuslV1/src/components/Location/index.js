//Used in DetailedPost
import React from "react";
import {View, Text, StyleSheet, FlatList, Image, Dimensions} from "react-native";

import { CollapsibleScrollView } from '@r0b0t3d/react-native-collapsible';
const width = Dimensions.get("window").width - 40;
const LocationScreen = (props) =>{
    const post = props.post;
    return (
        <CollapsibleScrollView>
            <Text style={{fontSize: 25, fontWeight: "600", marginBottom: 20, marginTop: 30, marginLeft: 20}}>Location Images</Text>
            <FlatList
            data={post.locationImages}
            pagingEnabled
            horizontal
            style ={{marginBottom: 20, marginHorizontal: 20, borderRadius: 10}}
            renderItem={({item}) => (
                <Image
                    style={{resizeMode: "cover", borderRadius: 10}}
                    source={{uri: item}}
                    height = {width/1.5}
                    width = {width}
                />
            )}
            />
            <View style={{borderTopWidth: 1, borderTopColor: "lightgrey", marginHorizontal: 20, marginBottom: 100}}>
            <Text style={{fontSize: 25, fontWeight: "600", marginBottom: 20, marginTop: 30}}>Location</Text>
            <Image
                style={{resizeMode: "cover", alignSelf: "center", marginHorizontal: 10, borderRadius: 10}}
                height={width/1.75}
                width={width}
                source={require('../../../assets/images/googleIMG.png')}
            />
            </View>
        </CollapsibleScrollView>
    );
};

export default LocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})