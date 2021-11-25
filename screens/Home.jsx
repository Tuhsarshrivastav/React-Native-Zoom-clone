import React from "react";
import { View, SafeAreaView } from "react-native";
import ContactMenu from "../components/ContactMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View>
      <SafeAreaView>
        <Header />
        <SearchBar />
        <MenuButtons />
        <ContactMenu/>
      </SafeAreaView>
    </View>
  );
};

export default Home;
