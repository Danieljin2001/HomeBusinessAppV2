import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20
    },    
    image: {
        //aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5,
    },
    profileRow: {
        //marginVertical: 10,
        flexDirection: "row",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        
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
        marginTop: 5,
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
    }


});

export default styles;