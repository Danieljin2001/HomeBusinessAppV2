import React from "react";
import { View, Text, Image, Pressable, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Dimensions, FlatList } from "react-native";
import styles from './styles.js'; 
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const {width} = Dimensions.get("window");
const height = width / 1.5 //3:2 aspect ratio

//recieve data into props
const Post = (props) => {

    

    const post = props.post;
    const navigation = useNavigation();

    const goToPostPage = () =>{
        navigation.navigate("Post", {postId: post.id});
    }

    return (
        // <TouchableOpacity onPress={goToPostPage} style={styles.container} activeOpacity={0.5}>
            <View style={styles.container}>
                {/* image */}
                
                <FlatList 
                    data={post.image}
                    pagingEnabled 
                    horizontal 
                    style={{height: height, width: width-20, borderRadius: 10,}} //-20 because of the marginHorizontal: 10
                    renderItem={({item})=> (
                        <TouchableWithoutFeedback onPress={goToPostPage}>
                        <Image
                            style={styles.image}
                            source={{uri: item}}
                            height={height}
                            width={width-20} 
                        />
                        </TouchableWithoutFeedback>
                        
                    )}
                />
                
                
                <TouchableWithoutFeedback onPress={goToPostPage}>
                    <View>
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
                        
                        {/* store name and service type and profile pic */}
                    
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
                    </View>
                </TouchableWithoutFeedback>
            </View>
            
        // </TouchableOpacity>
    );
};

export default Post;