import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const SEM1 = [
  {
    id: "01",
    title: "First Item-SEM1",
  },
  {
    id: "02",
    title: "Second Item-SEM1",
  },
  {
    id: "03",
    title: "Third Item-SEM1",
  },
];

const SEM2 = [
  {
    id: "04",
    title: "First Item-SEM2",
  },
  {
    id: "05",
    title: "Second Item-SEM2",
  },
  {
    id: "06",
    title: "Third Item-SEM2",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.title}</Text>
  </TouchableOpacity>
);

export default function PlanScreen({route}) {
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          console.log("Press : ", item.id);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Plan Details</Text>

      <Text>Student ID : xxxx</Text>
      <Text>Student Name : xxxx</Text>
      <Text style={styles.subheader}>Semester 1/2564</Text>
      <FlatList
        data={SEM1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.subheader}>Semester 2/2564</Text>
      <FlatList
        data={SEM2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
  },
  header: {
    paddingTop: 50,
    fontSize: 20,
    fontWeight: "bold",
  },
  subheader: {
    paddingTop: 30,
    fontSize: 16,
    fontWeight: "bold",
  },

  input: {
    padding: 20,
    height: 15,
    borderWidth: 1,
    margin: 15,
  },
});
