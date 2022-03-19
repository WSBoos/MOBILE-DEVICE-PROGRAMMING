import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function SemesterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please select a semester</Text>
      <Button title="1/2564" onPress={() => {navigation.navigate("ListSubject", {id:1} );}}/>
      <Text style={styles.header}>or</Text>
      <Button title="2/2564" onPress={() => {navigation.navigate("ListSubject");}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    marginHorizontal: 16,
  },
  header: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});
