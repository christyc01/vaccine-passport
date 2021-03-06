import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState("");
  const qrValue = text;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Vaccine Passport</Text>
      <Text style={styles.bigGerm}>🦠</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your name"
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Yay, here it is!</Text>
            <Image 
              style={styles.qrCode}
                source={{ 
                  width: 300,
                  height: 300,
                  uri: `https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&amp;size=100x100`
                }} 
                /> 
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.pressableText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>If you promise you've been vaccinated, click here for your personalized QR code!</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bigGerm: {
    fontSize:250,
  },
  button: {
    backgroundColor: "#248800",
    borderRadius: 50,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headingText: {
    textAlign: "center",
    fontSize: 60,
    paddingTop: 20,
    fontWeight: "bold",
  },
  input: {
    margin: 10,
    fontSize: 30,
    borderWidth: 3,
    borderColor: "#248800",
    borderRadius: 50,
    padding: 20,
  },
  modalText: {
    textAlign: "center",
    fontSize: 40
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 100,
    elevation: 5
  },
  pressableText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  qrCode: {
    marginTop: 40,
    marginBottom: 40,
  }
});
