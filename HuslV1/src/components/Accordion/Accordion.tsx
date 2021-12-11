import React from "react";
import { StyleSheet, Text, View } from "react-native";

import List, { List as ListModel } from "./List";

const list: ListModel = {
  name: "Total Points",
  items: [
    { name: "Nathaniel Hello" },
  ],
};

const cosmeticsList: ListModel = {
  name: "Cosmetics",
  items: [
    { name: "Barber"},
    { name: "Hair Stylist"},
    { name: "Lash Technician"},
  ],
};

const petsList: ListModel = {
  name: "Pets",
  items: [
    { name: "Pet Daycare"},
    { name: "Grooming"},
  ],
};

const musicList: ListModel = {
  name: "Music",
  items: [
    { name: "Recording Studio"},
    { name: "Piano Lesson"},
    { name: "Guitar Lesson"},
  ],
};

const otherList: ListModel = {
  name: "Other",
  items: [
    { name: "Bakery"},
    { name: "Photography"},
    { name: "Daycare"},
    { name: "Sewing"},

  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

const Accordion = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Markets</Text> */}
      {/* <List {...{ list }} /> */}
      <List list={cosmeticsList} />
      <List list={petsList} />
      <List list={musicList} />
      <List list={otherList} />


    </View>
  );
};

export default Accordion;
