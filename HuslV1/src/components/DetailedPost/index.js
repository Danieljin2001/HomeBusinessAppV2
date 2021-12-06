import React, { useState, useRef } from "react";
import { View, Text, Image, Dimensions, FlatList, Linking, TouchableOpacity, Animated } from "react-native";
import styles from './styles.js'; 
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from 'react-native-vector-icons/Feather';
import { CollapsibleContainer, CollapsibleHeaderContainer, StickyView, withCollapsibleContext, } from '@r0b0t3d/react-native-collapsible';

import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from "react-native-vector-icons/Entypo";

import { useNavigation } from "@react-navigation/native";
import COLOR from "../../../config/color";
import ViewMoreText from 'react-native-view-more-text';

import { StatusBar } from "react-native";
import color from "../../../config/color";

const {width} = Dimensions.get("window");
const height = width / 1.25 //2 thirds of the width (later change to 1.25)



//recieve data into props
const Post = (props) => {

    const navigation = useNavigation();

    const post = props.post;
    const scrollA = useRef(new Animated.Value(0)).current;

    function renderViewMore(onPress){
        return(
          <Text onPress={onPress} style={{lineHeight: 25, textDecorationLine: "underline", fontWeight: "600", color:"black" }}>View more</Text>
        )
      }
    function renderViewLess(onPress){
        return(
          <Text onPress={onPress} style={{lineHeight: 25, textDecorationLine: "underline", fontWeight: "600", color: "black"}}>View less</Text>
        )
      }

    function renderHeaderBar() {
        return (
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 100,
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    //paddingHorizontal: 0,
                    paddingBottom: 10,
                }}
            >   
                <Animated.View
                    style = {{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "white",
                        borderBottomColor: "lightgrey",
                        borderBottomWidth: 1,
                        opacity: scrollA.interpolate({
                            inputRange: [height- 200, height - 100],
                            outputRange: [0,1]
                        }),
                        
                    }}
                />

                {/* BACK button */}
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: 'center',
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        backgroundColor: "white",
                        marginLeft: 15,
                        shadowColor: "black",
                        shadowRadius: 3,
                        shadowOffset: {width: 0, height: 0},
                        shadowOpacity: scrollA.interpolate({
                            inputRange: [height- 150, height - 90],
                            outputRange: [0.1,0]
                        }),
                    }}
                    onPress = {() => navigation.goBack()}
                >
                    <EvilIcons name="close" size={20} color={"black"}/>
                </TouchableOpacity>

                {/* More button */}
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        backgroundColor: 'white',
                        marginRight: 15,
                        shadowColor: "black",
                        shadowRadius: 3,
                        shadowOffset: {width: 0, height: 0},
                        shadowOpacity: scrollA.interpolate({
                            inputRange: [height- 150, height - 90],
                            outputRange: [0.1,0]
                        }),
                    }}
                >
                    <Feather name = "more-vertical" size={20} color={"black"}/>

                </TouchableOpacity>

            </View>
        )
    }
     
    return (
        <View>
            
            {/* <StatusBar barStyle="light-content"/> */}
            <Animated.ScrollView
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollA}}}],
                    {useNativeDriver: true},
                )}
                scrollEventThrottle={16}
            >
                {/* HEADER IMAGES */}
                <View style={styless.bannerContainer}>
                    <Animated.FlatList
                        data={post.image}
                        pagingEnabled 
                        horizontal 
                        style={styless.banner(scrollA)} //-20 because of the marginHorizontal: 10
                        renderItem={({item})=> (
                            <Image
                                style={[styles.image]}
                                source={{uri: item}}
                                height={height}
                                width={width} 
                            />
                        )} 
                    />
                    
                </View>

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

                {/* PROFILE PIC + STORE NAME + SERVICE TYPE + RATING*/}
                <View style={styles.profileRow}>
                    <Image
                        style = {styles.profilePic}
                        source = {{uri: post.profilePic}}
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

                {/* DESCRIPTION */}
                <View style={{marginHorizontal: 20, borderBottomColor: "lightgrey", borderBottomWidth: 1, paddingBottom: 20}}>
                    <ViewMoreText numberOfLines={6} renderViewMore = {renderViewMore} renderViewLess = {renderViewLess}>
                        <Text style={{lineHeight: 20}}>
                            Step into the comfort of this beautiful, newly renovated 5-bedroom home, with outstanding facilities in Calgary, Alberta. Situated ideally in a desirable community of Varsity, a well-connected location next to the train station, several markets and a shopping center. Also, if you would like to make a trip to Downtown or the mountains, it will be just a short drive from our place.
                            {"\n"}Book now for:
                            {"\n"}Free internet & parking
                            {"\n"}Best location & Serene environment
                            {"\n"}Modern, stylish furniture and décor
                        </Text>
                    </ViewMoreText>
                </View>

                {/* MENU */}
                <View style={{marginHorizontal: 20, borderBottomColor: "lightgrey", borderBottomWidth: 1, paddingBottom: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "600", marginTop: 15, marginBottom: 10}}>Menu</Text>
                    <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                        <Text style={{lineHeight: 20, fontSize: 5}}>{'\u25CF'}</Text>
                        <Text style={{lineHeight: 20, marginLeft: 10, fontWeight: "500", fontSize: 15}}>HIGH FADE</Text>
                        <Text style={{lineHeight: 20, marginLeft: 10, fontWeight: "300", fontSize: 15}}>$50</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                        <Text style={{lineHeight: 20, fontSize: 5}}>{'\u25CF'}</Text>
                        <Text style={{lineHeight: 20, marginLeft: 10, fontWeight: "500", fontSize: 15}}>MED FADE</Text>
                        <Text style={{lineHeight: 20, marginLeft: 10, fontWeight: "300", fontSize: 15}}>$50</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center", marginVertical:5}}>
                        <Text style={{lineHeight: 20, fontSize: 5}}>{'\u25CF'}</Text>
                        <Text style={{lineHeight: 20, marginLeft: 10, fontWeight: "500", fontSize: 15}}>LOW FADE</Text>
                        <Text style={{lineHeight: 20, marginLeft: 10, fontWeight: "300", fontSize: 15}}>$50</Text>
                    </View>
                </View>

                {/* LOCATION IMAGES */}
                <View style={{marginHorizontal: 20, borderBottomColor: "lightgrey", borderBottomWidth: 1, paddingBottom: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "600", marginTop: 15, marginBottom: 10}}>Location Images</Text>
                    <FlatList
                        data={post.locationImages}
                        pagingEnabled
                        horizontal
                        style ={{marginBottom: 20, borderRadius: 10}}
                        renderItem={({item}) => (
                            <Image
                                style={{resizeMode: "cover", borderRadius: 10}}
                                source={{uri: item}}
                                height = {width/1.5}
                                width = {width-40}
                            />
                        )}
                    />
                </View>
                
                {/* LOCATION ON MAP */}
                <View style={{marginHorizontal: 20, borderBottomColor: "lightgrey", borderBottomWidth: 1, paddingBottom: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "600", marginTop: 15, marginBottom: 10}}>Location</Text>
                    <Image
                        style={{resizeMode: "cover", alignSelf: "center", marginHorizontal: 10, borderRadius: 10}}
                        height={width/1.75}
                        width={width- 40}
                        source={require('../../../assets/images/googleIMG.png')}
                    />
                </View>
                <View style={{marginHorizontal: 20, paddingBottom: 90}}>

                </View>


            </Animated.ScrollView>
            

            {/* header (close button) */}
            {renderHeaderBar()}

            {/* Bottom buttons */}
            <View style= {{flex: 1, alignItems: "center", justifyContent:"space-between", flexDirection:"row", borderTopColor: "lightgrey", borderTopWidth: 1, position: "absolute", backgroundColor:"white", width: Dimensions.get("window").width, height: 90, bottom: 0}}>
                {/* favourite button */}
                <TouchableOpacity 
                    activeOpacity={0.3}
                    style={{ marginLeft: 20, marginBottom: 20 }}
                >
                    <Feather name="heart" size = {35} color={COLOR.primary}/>
                </TouchableOpacity>
                <View style={{flexDirection: "row"}}>
                    {/* phone button */}
                    <TouchableOpacity 
                        activeOpacity={0.3}
                        style={{alignSelf: 'flex-end', paddingRight: 15, marginBottom: 20 }}
                        onPress={() => {Linking.openURL(`tel:${post.phoneNumber}`).catch(e=>console.warn(e))}}
                    >
                        <Ionicons name="call" size = {35} color={COLOR.primary}/>
                    </TouchableOpacity>
                    {/* message button */}
                    <TouchableOpacity 
                        activeOpacity={0.3}
                        style={{alignSelf: 'flex-end', paddingRight: 20, marginBottom: 20 }}
                    >
                        <Entypo name="message" size = {40} color={COLOR.primary}/>
                    </TouchableOpacity>
                        
                </View>
            
            </View>
        </View>
    );
};

const styless = {
    bannerContainer: {
        marginTop: -1000,
        paddingTop: 1000,
        alignItems: "center",
        overflow: "hidden",
    },
    banner: scrollA => ({
        height: height,
        width: width,
        transform: [
            {
                translateY: scrollA.interpolate({
                    inputRange: [-height, 0, height, height+1],
                    outputRange: [-height/2, 0, height * 0.75, height*0.75]
                })
            },
            {
                scale: scrollA.interpolate({
                    inputRange: [-height, 0, height, height+1],
                    outputRange: [2,1, 1, 1],
                })
            }
            
          ],
    }),
};

export default Post;

