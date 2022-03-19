import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class screen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes_Counter: "00",
      seconds_Counter: "00",
      boos: null,
    };
  }

  onButtonStart = () => {
    this.state.boos = setInterval(() => {
      this.state.seconds_Counter = (parseInt(this.state.seconds_Counter) + 1).toString();
      if (parseInt(this.state.seconds_Counter) > 59) {
        this.state.minutes_Counter = (parseInt(this.state.minutes_Counter) + 1).toString();
        this.state.seconds_Counter = "00";
        if (parseInt(this.state.minutes_Counter) < 10 && parseInt(this.state.minutes_Counter) > 0){
            this.state.minutes_Counter = "0" + this.state.minutes_Counter
          }
      }
      if (parseInt(this.state.seconds_Counter) < 10 ){
        this.state.seconds_Counter = "0" + this.state.seconds_Counter
      }
      this.forceUpdate()
    },1000 );
  };

  onButtonStop = () => {
    clearInterval(this.state.boos);
  };

  onButtonClear = () =>{
    this.setState({ seconds_Counter: "00" });
    this.setState({ minutes_Counter: "00" });
    clearInterval(this.state.boos);
  }

  render() {
    const { timer, minutes_Counter, seconds_Counter, tartDisable } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ height: 50 }} />
        <Text>{minutes_Counter}:{seconds_Counter}</Text>
        <View style={{ height: 30 }} />

        <TouchableOpacity style={styles.button} onPress={this.onButtonStart}>
          <Text>START</Text>
        </TouchableOpacity>
        <View style={{ height: 30 }} />
        <TouchableOpacity style={styles.button} onPress={this.onButtonStop}>
          <Text>STOP</Text>
        </TouchableOpacity>
        <View style={{ height: 30 }} />

        <TouchableOpacity
          onPress={this.onButtonClear}
          activeOpacity={0.6}
          style={styles.button}
          disabled={this.state.startDisable}
        >
          <Text style={styles.buttonText}> CLEAR </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  textinput: {
    height: "20px",
    width: "50%",
    borderWidth: 1,
    borderColor: "red",
    margin: "2%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "orange",
    width: "80%",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default screen3;
