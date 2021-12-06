import React from "react";
import {View, Text, Dimensions} from "react-native"
import BottomSheet, {BottomSheetFlatList, BottomSheetScrollView} from "@gorhom/bottom-sheet";
//dummy data (array)
import feed from '../../../assets/data/feed';
import Post from "../Post";

const height = Dimensions.get("window").height;

const PostBottomSheet = (props) => {

    function renderListHeader() {
        return(
            <View style={{marginBottom: 50, marginTop: 10 , justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontWeight:"600"}}>4 Results</Text>
            </View>
        );
    }

    return (
        <BottomSheet
            snapPoints={[100, height/2, height]}
        >   
            
            <BottomSheetFlatList
                ListHeaderComponent ={renderListHeader}
                data={feed}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => {
                    return(
                        <Post post={item}/>
                )
                }}
            />


        </BottomSheet>
    );
}

export default PostBottomSheet;