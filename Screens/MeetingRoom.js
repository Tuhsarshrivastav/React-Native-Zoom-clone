import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Alert,
} from "react-native";
import StartMeeting from "../Components/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Chat from "../Components/Chat";

let socket = io();
let URL = "http://aa64-176-177-27-107.ngrok.io";

const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
];

function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  const [type, setType] = useState("front");
  const [modalVisible, setModalVisible] = useState(false);

  const startCameraHandler = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      alert("Access denied");
    }
  };

  const joinRoom = () => {
    startCameraHandler();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    socket = io(`${URL}`);
    // socket.on("connection", () => console.log("I'm connected booy!"));
    socket.on("all-users", (users) => {
      setActiveUsers(users);
    });
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle="fullScreen"
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <Chat
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Modal>

          {/* Active Users Sections */}
          <View style={styles.activeUsersContainer}>
            <View style={styles.CameraContainer}>
              <Camera
                type={type}
                style={{
                  width: activeUsers.length <= 1 ? "100%" : 200,
                  height: activeUsers.length <= 1 ? 600 : 200,
                }}
              ></Camera>
              {activeUsers
                .filter((user) => user.userName != name)
                .map((user, index) => (
                  <View key={index} style={styles.activeUserContainer}>
                    <Text style={{ color: "white" }}>{user.userName}</Text>
                  </View>
                ))}
            </View>
          </View>
          {/* Footer */}
          <View style={styles.menuFooter}>
            {menuIcons.map((menu, index) => (
              <TouchableOpacity style={styles.tile} key={index}>
                <FontAwesome
                  name={menu.name}
                  size={24}
                  color={menu.customColor ? menu.customColor : "#efefef"}
                />
                <Text style={styles.textTile}>{menu.title}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.tile}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <FontAwesome name="comment" size={24} color={"#efefef"} />
              <Text style={styles.textTile}>Chat</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        // Start meeting section
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  CameraContainer: {
    backgroundColor: "black",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  activeUsersContainer: {
    flex: 1,
    justifyContent: "center",
  },
  activeUserContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  textTile: {
    color: "white",
    marginTop: 10,
  },
  menuFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
