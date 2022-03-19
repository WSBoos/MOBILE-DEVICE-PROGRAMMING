import React, { Component, useState, useEffect } from "react";
import { ScrollView, Image } from "react-native";
import firebase from "../database/firebaseDB";
import { ListItem } from "react-native-elements";

const showstudent = ({ navigation }) => {
  const subjCollection = firebase.firestore().collection("student");
  const [student_list, setStudentlist] = useState([]);
  let unsubscribe;

  const getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      const { studentId, name, gpa } = res.data();
      all_data.push({
        key: res.id,
        studentId,
        name,
        gpa,
      });
    });
      setStudentlist(all_data); 
  };

  useEffect(() => {
    console.log("1");
    unsubscribe = subjCollection.onSnapshot(getCollection);
  }, [])

  return (

    <ScrollView>
      <Image
        source={require("../assets/IT_Logo.png")}
        style={{ width: 120, height: 100, marginTop: 50 }}
      />
      {student_list.map((item, i) => {

        return (
          <ListItem key={i} bottomDivider onPress={() => {
            navigation.navigate("Student Info" ,{info:item.key});
          }}>
            <ListItem.Content>
              <ListItem.Title>{item.studentId}</ListItem.Title>
              <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
              <ListItem.Subtitle>{item.gpa}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default showstudent;
