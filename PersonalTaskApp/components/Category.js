import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Category = ({ title, tasks, image }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.tasks}>{tasks} Tasks</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 10,
    elevation: 24,
  },
  image: {
    width: 100,
    height: 100,
    left: 20,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    right: 20,
  },
  tasks: {
    fontSize: 16,
    color: "#888",
    right: 30,
  },
});

export default Category;
