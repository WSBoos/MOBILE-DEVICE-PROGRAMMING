import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Example04 = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0

  const spring = () => {
    console.log("spring..");
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
      tension: 5,
      // bounciness: 30,
      // speed: 20,
      useNativeDriver: true,
    }).start(() => {
      springVal.setValue(0.3);
    });
  };

  return (

    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
        source={require("../assets/IT_Logo.png")}
      />
      <View style={styles.btn}>
        <Button title="SPRING" onPress={spring} />
      </View>
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

export default Example04;