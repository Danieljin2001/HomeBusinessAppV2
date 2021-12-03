import { StyleSheet, Dimensions } from 'react-native';
import COLOR from "../../../config/color";

const {width} = Dimensions.get("window");
const height = width / 1.5 //2 thirds of the width

const styles = StyleSheet.create({
    hScroll: {
        height: height,
        width: width,
    },    
    image: {
        //aspectRatio: 3/2,
        resizeMode: 'cover',
        
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5,
    },
    profileRow: {
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: "row",
    },
    row: {
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        
    },
    topButtonRow:{
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    location:{
        color: "grey"
    },
    community:{
        textTransform: 'uppercase',
        fontSize: 15,
    },
    city:{
        textTransform: 'capitalize',
        fontSize: 14,
    },  
    priceContainer:{
        marginTop: 3,
        backgroundColor: 'salmon',
        borderRadius: 5,
        padding:2,
        
    },
    price:{
        textTransform: 'lowercase',
        fontSize: 15,
        color: "black",
    },
    storeName: {
        textTransform: 'capitalize',
        fontSize: 25,
        fontWeight: "bold",
    },
    service: {
        fontSize: 15,
        color: "black",
    },
    ratingAverage: {
        fontSize: 14
    },
    ratingTotal: {
        fontSize: 13,
        color: "grey",
    },
    tabContainer: {
        flexDirection: "row",
        paddingTop: 10
    },
    tab: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderColor: "transparent",
    },
    tabSelected: {
        borderColor: COLOR.primary
    },
    tabTitle: {
        fontWeight: 'bold',
    },
    tabTitleSelected: {
        color: COLOR.primary
    }


});

export default styles;