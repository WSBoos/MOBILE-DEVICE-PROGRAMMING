import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Example05 = (props) => {
  const animV2 = useRef(new Animated.Value(1)).current;
  const valueX = useRef(new Animated.Value(-50)).current;



  const animate = () => {
    console.log("animate...");
    Animated.parallel([
      Animated.spring(animV2, {
        toValue: 2,
        duration: 2000,
        friction: 1,
        tension: 140,
        useNativeDriver: true,
      }),
      Animated.timing(valueX, {
        toValue: 0,
        duration: 2000,
        easing: Easing.bounce,

        easing: Easing.elastic(10),

        useNativeDriver: true
      }),



    ]).start(() => {
      animV2.setValue(1);
      valueX.setValue(-50)
    });
  };
  return (
    <View style={styles.container}>

      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: animV2 }] }}
        source={require("../assets/IT_Logo.png")}
      />
      <Animated.Text style={{ transform: [{ translateX: valueX }] }}>Welcome to Faculty of IT</Animated.Text>
      <View style={styles.btn}>
        <Button title="RUN PARALLEL" onPress={animate} /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: "100%",
    marginVertical: 30
  },
  fadingContainer: {
    width: 250,
    height: 50,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
});

export default Example05;