import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Text,
} from "react-native";
import Header from "../components/Header";
import Category from "../components/Category";

const categories = [
  {
    id: "1",
    title: "Exercise",
    tasks: 12,
    image: require("../assets/study.png"),
  },
  {
    id: "2",
    title: "Study",
    tasks: 12,
    image: require("../assets/Excices.png"),
  },
  { id: "3", title: "Work", tasks: 12, image: require("../assets/work.png") },
  {
    id: "4",
    title: "Personal",
    tasks: 12,
    image: require("../assets/Personal.png"),
  },
  { id: "5", title: "Home", tasks: 12, image: require("../assets/Home.png") },
  {
    id: "6",
    title: "Shopping",
    tasks: 12,
    image: require("../assets/Shopping.png"),
  },
  {
    id: "7",
    title: "Travel",
    tasks: 12,
    image: require("../assets/Travel.png"),
  },
  {
    id: "8",
    title: "Others",
    tasks: 12,
    image: require("../assets/Other.png"),
  },
  {
    id: "9",
    title: "Health",
    tasks: 12,
    image: require("../assets/Health.png"),
  },
  {
    id: "10",
    title: "Finance",
    tasks: 12,
    image: require("../assets/Finance.png"),
  },
];

const tasks = [
  { id: "1", title: "Mobile App Development" },
  { id: "2", title: "Web Development" },
  { id: "3", title: "UI/UX Design" },
  { id: "4", title: "Data Science" },
  { id: "5", title: "Machine Learning" },
  { id: "6", title: "Artificial Intelligence" },
  { id: "7", title: "Digital Marketing" },
  { id: "8", title: "Content Writing" },
  { id: "9", title: "Video Editing" },
  { id: "10", title: "Photography" },
  { id: "11", title: "Music Production" },
  { id: "12", title: "Game Development" },
  { id: "13", title: "Animation" },
  { id: "14", title: "Film Making" },
  { id: "15", title: "DCIT 202 Tutorial" },
];

const MainScreem = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Button title="Filter" onPress={() => {}} />
      </View>
      <Text style={styles.testUpdate}>Categories</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <Category
              key={category.id}
              title={category.title}
              tasks={category.tasks}
              image={category.image}
            />
          ))}
        </View>
      </ScrollView>
      <Text style={styles.textUpdate}>Ongoing Tasks</Text>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
  },
  searchInput: {
    flex: 1,
    fontSize: 24,
    padding: 10,
    borderWidth: 1,
    borderColor: "Yellow",
    borderRadius: 10,
  },
  textUpdate: {
    fontSize: 26,
    padding: 20,
  },
  testUpdate: {
    fontSize: 26,
    width: 170,
    height: 37,
    color: "#000000",
    top: 0,
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
  categoriesContainer: {
    flexDirection: "row",
  },
  tasksContainer: {
    padding: 20,
  },
  taskItem: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
});

export default MainScreem;
