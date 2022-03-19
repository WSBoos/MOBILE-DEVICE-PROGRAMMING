import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SUBJECTS1 } from "../data/dummy-data";
import { SUBJECTS2 } from "../data/dummy-data";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.id} : {item.name}</Text>
  </TouchableOpacity>
);

const SubjectListScreen = ({navigation, route}) => {
  console.log(route)
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          console.log("Press : ", item.id);
          {navigation.navigate("detail", {id:item.id, name:item.name, credit:item.credit, description:item.description});}
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>All Subjects</Text>
      <FlatList
      
        data={SUBJECTS1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 16,
  },
});

export default SubjectListScreen;
