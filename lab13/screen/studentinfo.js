import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

const studentinfo = ({ route, navigation }) => {
  const [studentid, setStudentid] = useState("");
  const [studentname, setStudentname] = useState("");
  const [gpa, setGpa] = useState("");
  const [key, setKey] = useState("");
  const { info } = route.params;
  const subjDoc = firebase.firestore().collection("student").doc(info);


  useEffect(() => {
    subjDoc
    .get((res) => {})
    .then((res) => {
      if (res.exists) {
        console.log(res.data());
        const subj = res.data();
        setKey(res.id),
          setStudentid(subj.studentId),
          setStudentname(subj.name),
          setGpa(subj.gpa);
      } else {
        console.log(info);
        console.log("Document does not exist!!");
      }
    });
  }, [])

  function updateSubject() {
    const updateSubjDoc = firebase.firestore().collection("student").doc(key);
    updateSubjDoc
      .set({
        studentId: studentid,
        name: studentname,
        gpa: gpa,
      })
      .then(() => {
        Alert.alert("Updating Alert", "Update Complete");
      });
  }

  function deleteSubject() {
    const delSubjDoc = firebase.firestore().collection("student").doc(key);
    delSubjDoc.delete().then((res) => {
      Alert.alert("Deleting Alert", "Delete Complete");
      navigation.navigate("Student List");
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
        onChangeText={(val) => setStudentid(val)}
      />
      <Input
        placeholder={"Student Name"}
        value={studentname}
        onChangeText={(val) => setStudentname(val)}
      />
      <Input
        placeholder={"GPA"}
        value={gpa}
        onChangeText={(val) => setGpa(val)}
      />
      <Button
        style={{ marginBottom: 20 }}
        title="Update Student"
        onPress={() => updateSubject()}
      />
      <Button
        title="Delete Student"
        containerStyle={{ marginTop: 10 }}
        onPress={() => {
          deleteSubject();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default studentinfo;
