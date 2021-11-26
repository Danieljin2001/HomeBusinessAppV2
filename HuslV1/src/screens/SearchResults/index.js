import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import Post from '../../components/Post';

//dummy data (array)
import feed from '../../../assets/data/feed';

const SearchResultsScreen = (props) => {
    
    return (
        <SafeAreaView>
            <FlatList
                data={feed}
                renderItem={({item}) => <Post post={item}/>}
            />
        </SafeAreaView>
    );
};


export default SearchResultsScreen;