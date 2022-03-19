import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Example06 = (props) => {
  const animV1 = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
  const animV2 = useRef(new Animated.Value(0)).current;

  const spin = animV2.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animate = () => {
    console.log("sequence...");
    Animated.sequence([
      Animated.timing(animV1, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animV1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animV2, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(animV2, {
        toValue: 1,
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start(() => {
      animV1.setValue(1);
    });
  };
  return (

    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, opacity: animV1, transform: [{ rotate: spin }] }}
        source={require("../assets/IT_Logo.png")}
      />
      <View style={styles.btn}>
        <Button title="RUN SEQUENCE" onPress={animate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
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

export default Example06;