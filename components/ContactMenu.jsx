import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactMenus = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "kendall jenner",
    photo: require("../assets/Kendall-Jenner.webp"),
  },
  {
    type: "contact",
    name: "Zyan Malik",
    photo: require("../assets/zayn1.webp"),
  },
  {
    type: "contact",
    name: "post malone",
    photo: require("../assets/post_malone_image_3_2_.jpg"),
  },
];
const ContactMenu = () => {
  return (
    <View style={styles.container}>
      {contactMenus.map((contact, index) => (
        <View key={index} style={styles.row}>
          {contact.type == "starred" ? (
            <View style={styles.staredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
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
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
