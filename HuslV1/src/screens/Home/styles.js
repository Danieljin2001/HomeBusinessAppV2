import { StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    column: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: "flex-end",
        alignItems: 'center',
        zIndex: 100,

    }, 
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        width: "100%",
        marginLeft: 20,
        top: 250,

    },
    findServiceButton:{
        backgroundColor: 'black',
        marginVertical: 10,
        height: 50,
        width: 180,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
    },
    findServiceButtonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchButton:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        height: 60,
        width: Dimensions.get('screen').width - 40, //minus -40 because push it to the left 40 and then marginhorizontal right 20
        marginHorizontal: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },


});

export default styles;