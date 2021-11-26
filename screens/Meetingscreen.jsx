import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";
const Meetingscreen = () => {
  const [name, setName] = useState();
  const [roomid, setRoomId] = useState();
  const URL = "http://localhost:5000";
  useEffect(() => {
    const socket = io(`${URL}`);
    socket.on("connection", () => console.log("connected"));
  }, []);
  return (
    <View style={styles.container}>
      <StartMeeting name={name} roomid={roomid} />
    </View>
  );
};

export default Meetingscreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
});
