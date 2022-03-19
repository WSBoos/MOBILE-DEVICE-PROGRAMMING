import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Button,
} from "react-native";

class screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", weight: "", ans: "", anss: "" };
  }

  onPress = () => {
    this.state.ans =  parseInt(this.state.weight) / (parseInt(this.state.height) / 100) ** 2

    if (parseInt(this.state.ans) > 32) {
      this.state.anss = "Obese";
    } else if (parseInt(this.state.ans) > 25) {
      this.state.anss = "Over Weight";
    } else if (parseInt(this.state.ans) > 18.5) {
      this.state.anss = "Normal Weight";
    } else {
      this.state.anss = "Under Weight";
    }
    this.forceUpdate()
  };

  render() {
    const { weight, height, ans, anss } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ height: 50 }} />
        <Text style={{fontSize: 20}}>BMI Calculator</Text>
        <View style={{ height: 30 }} />
        <Text style={{ alignSelf: 'flex-start', paddingLeft:50 }}>Height</Text>
        <View style={{ height: 10 }} />
        <TextInput
          style={styles.textinput}
          value={this.state.height}
          onChangeText={(height) => this.setState({ height })}
        />
        <View style={{ height: 20 }} />
        <Text style={{ alignSelf: 'flex-start', paddingLeft:50 }}>Weight</Text>
        <View style={{ height: 10 }} />
        <TextInput
          style={styles.textinput}
          value={this.state.weight}
          onChangeText={(weight) => this.setState({ weight })}
        />
        <View style={{ height: 30 }} />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Calculate</Text>
        </TouchableOpacity>
        <View style={{ height: 50 }} />
        {ans}
        <View style={{ height: 10 }} />
        {anss}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },

  textinput: {
    height: "30px",
    width: "80%",
    borderWidth: 1,
    margin: "2%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "salmon",
    padding: 10,
    width:"80%"
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default screen2;
