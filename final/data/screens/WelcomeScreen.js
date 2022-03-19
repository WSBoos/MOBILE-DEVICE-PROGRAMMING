import React from "react";
import { StyleSheet, View, Image, Text, TextInput, Button } from "react-native";

export default function WelcomeScreen({navigation}) {
  const [Student_ID, setStudent_ID] = React.useState("")
  const [Student_Name, setStudent_Name] = React.useState("")
  
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/IT_Logo.png")}
        style={{ width: 120, height: 100 }}
        containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
      />

      <Text style={styles.header}>Welcome to my program</Text>

      <TextInput style={styles.input} placeholder="Student ID" />
      <TextInput style={styles.input} placeholder="Student Name" />
      <Button title="Next" onPress={() => {navigation.navigate("Semester")}}/>
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
    padding: 10,
    height: 50,
    borderWidth: 1,
    margin: 15,
  },
});
