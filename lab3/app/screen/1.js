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

class screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" , todo: [], del: ""};
  }

  onPress = () => {
    this.state.todo.push(this.state.text);
    this.state.text = ""
    this.forceUpdate()
  };

  remove = (prop) => {
    this.state.todo.splice(prop, 1);
    this.forceUpdate()
  };

  render() {
    const { text } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ height: 20 }} />
          <Text>สมัดบันทึก</Text>
          <TextInput
            placeholder="เพิ่มข้อความที่นี่"
            style={styles.textinput}
            value= {this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text>บันทึก</Text>
          </TouchableOpacity>

          <View style={{ height: 20 }} />
          <View style={{ height: 20 }} />

          <View style={styles.container}>
            <View style={styles.countContainer}>
            {this.state.todo.map((prop, key) => {
                    return (
                        <TouchableOpacity>
                            <Text key={key} onPress={()=>this.remove(prop)}>{prop}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
          </View>
        </View>

        <View style={styles.logobox}>
          <Image style={styles.logo} source={require("../assets/IT.png")} />
        </View>
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
  logo: {
    width: 100,
    height: 100,
  },

  logobox: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: "5%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default screen1;
