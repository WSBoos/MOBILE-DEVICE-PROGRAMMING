import React, { Component } from "react";
import { ScrollView, Image } from "react-native";
import firebase from "../database/firebaseDB";
import { ListItem } from "react-native-elements";

class Example01 extends Component {
  constructor() {
    super();

    this.subjCollection = firebase.firestore().collection("student");

    this.state = {
      student_list: [],
    };
  }

  getCollection = (querySnapshot) => {
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
    // console.log("all_data : ", all_data);
    this.setState({
      student_list: all_data,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.subjCollection.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <ScrollView>
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100, marginTop: 50 }}
        />
        {this.state.student_list.map((item, i) => {
          return (
            <ListItem key={i} bottomDivider>
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
  }
}

export default Example01;
