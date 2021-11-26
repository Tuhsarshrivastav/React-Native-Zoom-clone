import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const ContactMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.staredIcon}>
          <AntDesign name="star" size={30} color="#efefef" />
        </View>
        <Text style={styles.text}>Starred</Text>
      </View>
    </View>
  );
};

export default ContactMenu;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  staredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
