import React, { Component, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

const addstudent = ({ navigation }) => {
    const subjCollection = firebase.firestore().collection("student");
    const [studentid , setStudentid] = useState("")
    const [studentname , setStudentname] = useState("")
    const [gpa , setGpa] = useState("")

  function storeStudent() {
    subjCollection
      .add({
        studentId: studentid,
        name: studentname,
        gpa: gpa,
      })
      .then((res) => {
        setStudentid(""),
        setStudentname(""),
        setGpa(""),
        Alert.alert(
          "Adding Alert",
          "New subject was added!! Pls check your DB!!"
        );
      });
  }

    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100 }}
          containerStyle={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 50,
          }}
        />
        <Input
          placeholder={"Student Id"}
          value={studentid}
          onChangeText={(studentid) => setStudentid(studentid)}
        />
        <Input
          placeholder={"Student Name"}
          value={studentname}
          onChangeText={(studentname) => setStudentname(studentname)}
        />
        <Input
          placeholder={"GPA"}
          value={gpa}
          onChangeText={(gpa) => setGpa(gpa)}
        />
        <Button style={{marginBottom:20}} title="Add Student" onPress={() => storeStudent()} />
        <Button
          title="Student List"
          onPress={() => {
            navigation.navigate("Student List");
          }}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default addstudent;
