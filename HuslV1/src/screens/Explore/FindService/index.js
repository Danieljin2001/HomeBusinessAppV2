import React from "react";
import { View, Text, Dimensions, StatusBar, TouchableOpacity, Platform } from "react-native";
import BottomSheet , {BottomSheetScrollView, BottomSheetFlatList} from "@gorhom/bottom-sheet";
import { LinearGradient } from 'expo-linear-gradient';
import COLOR from "../../../../config/color";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const { height, width } = Dimensions.get('window');


//finding status bar height
const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;
export const statusBarHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0
})


//where the text is placed
const textHeight = (height * 0.22);

const FindServiceScreen = (props) => {
    //const navigation = useNavigation();
    return(
        <View>
            {/* Background color */}
            <LinearGradient
                colors={[COLOR.primary, COLOR.secondary]}
                style = {{height: height, width: width}}
                //locations = {[0.5, 0.8]}
                end = {{ x: 0.9, y: 0.6}}
            >
                <Text style = {{color: "white", marginLeft: 15,fontSize: 30, fontWeight: "600" , marginTop: textHeight}}>Select a category {"\n"}and find a service</Text>
            </LinearGradient>

            {/* bottomsheet */}
            <BottomSheet
                snapPoints={[height/ 1.5, height - statusBarHeight]}
            >
                <BottomSheetScrollView
                    bounces = {false}
                >
                    {/* BACK BUTTON */}
                    <View>
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                justifyContent: 'center',
                                height: 30,
                                width: 30,
                                borderRadius: 15,
                                backgroundColor: "white",
                                marginLeft: 15,
                            }}
                            //onPress = {() => navigation.goBack()}
                        >
                            <MaterialIcons name="arrow-back-ios" size={20} color={"black"}/>
                        </TouchableOpacity>
                    </View>
                    

                </BottomSheetScrollView>

            </BottomSheet>
        </View>
    );
};

export default FindServiceScreen;