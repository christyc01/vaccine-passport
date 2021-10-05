import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Vaccine Passport</Text>
      <Text style={styles.bigGerm}>🦠</Text>

      <Pressable
        onPress={() => 
          alert("Pressed")
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          I solemnly swear that I've been vaccinated
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bigGerm: {
    fontSize: 300,
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
    fontSize: 30,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    textAlign: "center",
    fontSize: 60,
    padding: 0,
  },
});
