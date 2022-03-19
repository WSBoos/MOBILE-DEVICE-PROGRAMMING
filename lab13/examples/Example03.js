import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class Example03 extends Component {
  constructor() {
    super();

    this.state = {
      studentId: "",
      key: "",
      name: "",
      gpa: "",
    };
    this.info = route.params;
  }

  componentDidMount() {
    const subjDoc = firebase
      .firestore()
      .collection("student")
      .doc(this.info);
    subjDoc.get().then((res) => {
      if (res.exists) {
        const subj = res.data();
        this.setState({
          key: res.id,
          studentId: subj.studentId,
          name: subj.name,
          gpa: subj.gpa,
        });
      } else {
        console.log("Document does not exist!!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  updateSubject() {
    const updateSubjDoc = firebase
      .firestore()
      .collection("student")
      .doc(this.state.key);
    updateSubjDoc
      .set({
        studentId: this.state.studentId,
        name: this.state.name,
        gpa: this.state.gpa,
      })
      .then(() => {
        Alert.alert(
          "Updating Alert",
          "The subject was updated!! Pls check your DB!!"
        );
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100 }}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Input
          placeholder={"Subject Code"}
          value={this.state.studentId}
          onChangeText={(val) => this.inputValueUpdate(val, "studentId")}
        />
        <Input
          placeholder={"Subject Name"}
          value={this.state.name}
          onChangeText={(val) => this.inputValueUpdate(val, "name")}
        />
        <Input
          placeholder={"Subject Credit"}
          value={this.state.gpa}
          onChangeText={(val) => this.inputValueUpdate(val, "gpa")}
        />
        <Button
          title="Update Subject"
          onPress={() => {
            this.updateSubject();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default Example03;
