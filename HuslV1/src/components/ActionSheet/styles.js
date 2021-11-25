import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container:{
        backgroundColor: "white",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    grabber: {
        width: "100%",
        height: 80,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: "red",
        borderTopWidth: 2,
        borderTopColor: "black",
        alignSelf: "center",
        marginTop: 10,
    },
});

export default styles;