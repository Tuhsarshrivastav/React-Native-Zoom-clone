import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ContactMenu from "../components/ContactMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <ContactMenu />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
