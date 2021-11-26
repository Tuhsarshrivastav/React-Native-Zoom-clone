import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "starred",
  },
  {
    type: "contact",
    name: "Monkey D Luffy",
    photo: require("../assets/luffy.png"),
  },
  {
    type: "contact",
    name: "Roronoa Zoro",
    photo: require("../assets/zoro.png"),
  },
  {
    type: "contact",
    name: "Jinbei the first son of the sea",
    photo: require("../assets/jinbei.png"),
  },
];

function ContactMenu() {
  return (
    <View style={styles.container}>
      {/* Contact Container */}

      {contactsMenuButtons.map((contact, index) => (
        <View style={styles.row} key={index}>
          {/* Image */}
          {contact.type === "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color={"#efefef"} />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}
          {/* Text */}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
}

export default ContactMenu;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
