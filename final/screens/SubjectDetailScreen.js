import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function SubjectDetailScreen({route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{route.params.name}</Text>

      <Text>Subject ID : {route.params.id}</Text>
      <Text>Subject Name : {route.params.name}</Text>
      <Text>Subject Credit : {route.params.credit}</Text>
      <Text>Subject Description : {route.params.description}</Text>
      <Button title="Add to My Plan" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  header: {
    paddingTop: 50,
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    padding: 20,
    height: 15,
    borderWidth: 1,
    margin: 15,
  },
});
