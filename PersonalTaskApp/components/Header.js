// src/components/Header.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Lato,
  screenLeft,
  Hug,
} from "react-native";

const Header = ({ name, taskCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, Fabrice {name}</Text>
      <Text style={styles.taskCount}>{taskCount} 14 tasks today</Text>
      <Image source={require("../assets/icon21.png")} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F7F0E8",
    top: 0,
  },
  greeting: {
    fontSize: 24,
    width: 170,
    height: 37,
    color: "#000000",
  },
  taskCount: {
    width: 100,
    height: 16,
    top: 20,
    right: 170,

    fontSize: 14,
    color: "#000000",
    fontfamily: Lato,
    alignContent: screenLeft,
    fontweight: 100,
  },
  icon: {
    width: 50,
    height: 52,
  },
});

export default Header;
