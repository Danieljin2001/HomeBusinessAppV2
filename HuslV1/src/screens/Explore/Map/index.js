import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import styles from './styles';
import PostBottomSheet from "../../../components/BottomSheet";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import COLOR from "../../../../config/color";


const {height} = Dimensions.get("window");

const MapScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View style = {{height}}>
          
          <View style={styles.container}>
            <Text> Map hello</Text>
            
            {/* BOTTOM SHEET */}
            <PostBottomSheet/>
          </View>

          {/* HEADER */}
          <View
            style={{
              position:"absolute",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 45,
              top: 0,
              left: 0,
              right: 0,
              height: 90,
              backgroundColor: "white",
              shadowColor: "black",
              shadowRadius: 3,
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.4,
            }}  
          >
            {/* BACK BUTTON */}
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
                onPress = {() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-back-ios" size={20} color={"black"}/>
            </TouchableOpacity>

            {/* HEADER TEXT */}
            <View style={{backgroundColor:'#ededee', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 10,}}>
              <Text>Barber</Text>
            </View>

            {/* Back to Home BUTTON */}
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    justifyContent: 'center',
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    backgroundColor: "white",
                    marginRight: 15,
                }}
                onPress={() => navigation.navigate("Home")}
            >
                <Feather name="search" size={20} color={COLOR.primary}/>
            </TouchableOpacity>
          </View>
        </View>
    );
};

export default MapScreen;