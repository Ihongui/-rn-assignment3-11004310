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
      <Text style={styles.Appel}>Hello, Fabrice {name}</Text>
      <Text style={styles.taskCount}>15 tasks today </Text>
      <Image source={require("../assets/icon21.png")} style={styles.Photo} />
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
  Appel: {
    fontSize: 24,
    width: 170,
    height: 37,
    color: "#000000",
  },
  taskCount: {
    width: 100,
    height: 17,
    top: 20,
    right: 190,

    fontSize: 14,
    color: "#000000",
    fontfamily: Lato,
    alignContent: screenLeft,
    fontweight: 100,
  },
  Photo: {
    width: 50,
    height: 52,
  },
});

export default Header;
