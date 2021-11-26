import React, { useState } from "react";

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";

const StartMeeting = ({name,roomid}) => {

    return (
        <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder="Enter Name"
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={roomid}
            placeholder="Enter RoomId"
            onChangeText={(text) => setRoomId(text)}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.statMeetingButton} onPress={() => {}}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Start Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

export default StartMeeting

const styles = StyleSheet.create({
    startMeetingContainer: {},
    info: {
      backgroundColor: "#373538",
      width: "100%",
      height: 50,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#484648",
      padding: 12,
      justifyContent: "center",
    },
    textInput: {
      color: "#fff",
      fontSize: 18,
    },
    statMeetingButton: {
      width: 350,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0470dc",
      height: 50,
      borderRadius: 15,
    },
})
