import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import logo from "./assets/egg01.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.comment}>割れると思うなよ</Text>
      <Pressable
        onPress={() => alert("Hello, world!")}
        // style={{ backgroundColor: "blue" }}
      >
        <Image source={logo} style={styles.logo}></Image>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 300,
    height: 300,
    marginBottom: 150,
    resizeMode: "contain",
  },

  comment: {
    width: 400,
    height: 100,
    backgroundColor: "#000",
    marginBottom: 200,
    fontSize: 50,
    textAlign: "center",
    color: "#0f0",
  },
});
