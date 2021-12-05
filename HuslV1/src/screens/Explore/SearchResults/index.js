import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import Post from '../../../components/Post';

//dummy data (array)
import feed from '../../../../assets/data/feed';

const SearchResultsScreen = (props) => {
    
    return (
        <SafeAreaView>
            <FlatList
                data={feed}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => {
                    return(
                        <Post post={item}/>
                )
                }}
            />
        </SafeAreaView>
    );
};


export default SearchResultsScreen;