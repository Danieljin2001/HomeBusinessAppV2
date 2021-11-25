import React from "react";
import { View, Text, Image, Pressable, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from './styles.js'; 
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
//recieve data into props
const Post = (props) => {

    

    const post = props.post;
    const navigation = useNavigation();

    const goToPostPage = () =>{
        navigation.navigate("Post", {postId: post.id});
    }

    return (
        <TouchableOpacity onPress={goToPostPage} style={styles.container} activeOpacity={0.5}>
            <View>
                    {/* image */}
                <Image 
                    style={styles.image} 
                    source={{uri: post.image}}

                />
                {/* location and price tag*/}
                <View style={styles.row}>
                    <Text style={styles.location}>
                        <Text style={styles.community}>{post.community}</Text>
                        <Text style={styles.city}>, {post.city}</Text> 
                    </Text> 
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>${post.price}</Text>
                    </View>
                </View>
                
                {/* store name and service type*/}
            
                <View style={styles.profileRow}> 
                    <Image
                            style= {styles.profilePic}
                            source= {{uri: post.profilePic}}
                    />
                    <View>
                        <Text>
                            <Text style={styles.storeName}>{post.name}</Text>
                            <Text style={styles.service}>  ({post.serviceType})</Text>
                        </Text>
                        {/* rating */}
                        <Text>
                            <Fontisto name="star" size={15} color={"red"}/>
                            <Text style={styles.ratingAverage}>{post.ratingAverage}</Text>
                            <Text style={styles.ratingTotal}> ({post.ratingTotal})</Text>
                        </Text>
                    </View>
                </View>

            
            {/* profile pic component */}
            </View>
            
        </TouchableOpacity>
    );
};

export default Post;