import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import GameScreen from "./GameScreen";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to My Game</Text>
      <Button
        title="START GAME"
        onPress={() => {
          let rannum = Math.floor(Math.random() * 100);
          console.log(rannum)
          props.onStartGame(rannum);
          {GameScreen}
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;
