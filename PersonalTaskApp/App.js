import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainScreem from "./Display/MainScreem";
export default function App() {
  return (
    <View style={styles.container}>
      <MainScreem />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    alignItems: "center",
    justifyContent: "center",
  },
});
