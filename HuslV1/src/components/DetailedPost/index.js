import React, { useState } from "react";
import { View, Text, Image, Pressable, Dimensions, FlatList, Linking, TouchableOpacity } from "react-native";
import styles from './styles.js'; 
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from 'react-native-vector-icons/Feather';
import { CollapsibleContainer, CollapsibleHeaderContainer, StickyView, withCollapsibleContext, } from '@r0b0t3d/react-native-collapsible';

//tab screens
import AboutMeScreen from "../AboutMe/index.js";
import MenuScreen from "../Menu/index.js";
import LocationScreen from "../Location/index.js";
import ReviewsScreen from "../Reviews/index.js";

const {width} = Dimensions.get("window");
const height = width / 1.5 //2 thirds of the width (later change to 1.25)



//recieve data into props
const Post = (props) => {

    const post = props.post;
    const [currentTab, setCurrentTab] = useState(0);


    return (
        <View>
            <CollapsibleContainer>
                <CollapsibleHeaderContainer>
                    <View>
                        {/* portfolio image (horizontal list)*/}
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
                        
                        
                          
                    </View>

                    <StickyView>
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
                                <TouchableOpacity 
                                activeOpacity={0.3}
                                style={{alignSelf: 'flex-end', paddingHorizontal: 10 }}
                                onPress={() => {Linking.openURL(`tel:${post.phoneNumber}`).catch(e=>console.warn(e))}}
                                >
                                    <Feather name="phone" size={30} />
                                </TouchableOpacity>
                                {/* message button */}
                                <Pressable style={{ alignSelf: 'flex-end', paddingHorizontal: 10}}>
                                    <Feather name="message-square" size={30}/>
                                </Pressable>
                                {/* more button */}
                                <Pressable style={{alignSelf: 'flex-end', paddingHorizontal: 7}}>
                                    <Feather name="more-vertical" size={30}/>
                                </Pressable>
                            </View>
                        </View> 
                        {/* Tabs */}
                        <View style={styles.tabContainer}>
                            <TouchableOpacity
                                style={[styles.tab, currentTab === 0 ? styles.tabSelected : {}]}
                                onPress = {() => setCurrentTab(0)}
                            >
                                <Text style={[styles.tabTitle, currentTab == 0 ? styles.tabTitleSelected : {}]}>About Me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.tab, currentTab === 1 ? styles.tabSelected : {}]}
                                onPress = {() => setCurrentTab(1)}
                            >
                                <Text style={[styles.tabTitle, currentTab == 1 ? styles.tabTitleSelected : {}]}>Menu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.tab, currentTab === 2 ? styles.tabSelected : {}]}
                                onPress = {() => setCurrentTab(2)}
                            >
                                <Text style={[styles.tabTitle, currentTab == 2 ? styles.tabTitleSelected : {}]}>Location</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.tab, currentTab === 3 ? styles.tabSelected : {}]}
                                onPress = {() => setCurrentTab(3)}
                            >
                                <Text style={[styles.tabTitle, currentTab == 3 ? styles.tabTitleSelected : {}]}>Reviews</Text>
                            </TouchableOpacity>
                        </View>
                    </StickyView>
                </CollapsibleHeaderContainer>
                {currentTab === 0 && <AboutMeScreen post= {post}/>}
                {currentTab === 1 && <MenuScreen post= {post}/>}
                {currentTab === 2 && <LocationScreen post= {post}/>}
                {currentTab === 3 && <ReviewsScreen post= {post}/>}
            </CollapsibleContainer>
        </View>
    );
};

export default withCollapsibleContext(Post);