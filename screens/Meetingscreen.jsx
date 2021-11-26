import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
const Meetingscreen = () => {
  const [name, setName] = useState();
  const [roomid, setRoomId] = useState();
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default Meetingscreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
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
});
