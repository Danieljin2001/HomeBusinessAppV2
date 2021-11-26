import React from "react";
import { View, Text, Image, Pressable, ScrollView, Dimensions, FlatList } from "react-native";
import styles from './styles.js'; 
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from 'react-native-vector-icons/Feather';


const {width} = Dimensions.get("window");
const height = width / 1.5 //2 thirds of the width

//recieve data into props
const Post = (props) => {

    const post = props.post;

    return (
        <ScrollView>
            <View>
                {/* portfolio image */}
                <FlatList 
                    data={post.image}
                    pagingEnabled 
                    horizontal 
                    style={styles.hScroll} 
                    renderItem={({item})=> (
                        <Image
                            style={styles.image}
                            source={{uri: item}}
                            height={height}
                            width={width} 
                        />
                    )}
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
                
                {/* profilepic, store name, service type, rating*/}
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

                
                {/*favourite, message, call, more (report share)*/}
                <View style={styles.topButtonRow}>
                    {/* favorite button */}
                    <Pressable style={{flexDirection: "row", alignItems:"center", backgroundColor: "white", borderWidth:1, borderColor: "black", borderRadius: 5, padding: 3}}>
                        <Text>Favorite </Text>
                        <Feather name="heart"/>
                    </Pressable>
                    <View style={{flexDirection: "row"}}>
                        {/* phone button */}
                        <Pressable style={{alignSelf: 'flex-end', paddingHorizontal: 7 }}>
                            <Feather name="phone" size={30}/>
                        </Pressable>
                        {/* message button */}
                        <Pressable style={{ alignSelf: 'flex-end', paddingHorizontal: 7}}>
                            <Feather name="message-square" size={30}/>
                        </Pressable>
                        {/* more button */}
                        <Pressable style={{alignSelf: 'flex-end', paddingHorizontal: 7}}>
                            <Feather name="more-vertical" size={30}/>
                        </Pressable>
                    </View>
                </View>

                {/* menu */}
                <View style={{marginTop: 20, borderTopColor: "lightgrey", borderTopWidth: 1, marginHorizontal: 10}}>
                    <Text style={{fontWeight: "bold", fontSize: 18, marginTop: 10}}>Menu:</Text>
                    <Text style={styles.menuDescription}>
                        {post.menu}
                    </Text>
                </View>

                
            </View>
        </ScrollView>
    );
};

export default Post;