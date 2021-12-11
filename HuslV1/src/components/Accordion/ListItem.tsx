import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const LIST_ITEM_HEIGHT = 54;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#f4f4f6",
    height: LIST_ITEM_HEIGHT,
  },
  name: {
    fontSize: 16,
  },
});

export interface ListItem {
  name: string;
  //points: string;
}

interface ListItemProps {
  item: ListItem;
  isLast: boolean;
}

const ListItem = ({ item, isLast }: ListItemProps) => {
  const navigation = useNavigation();
  const bottomRadius = isLast ? 8 : 0;
  
  return (
    <TouchableOpacity 
      onPress = {() => navigation.navigate("Map Screen")}
    >
      <View
        style={[
          styles.container,
          {
            borderBottomLeftRadius: bottomRadius,
            borderBottomRightRadius: bottomRadius,
          },
        ]}
      >
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
