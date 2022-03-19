import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native'; // v.6.x
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyNavigator from "./navigation/MyNavigator.js"

export default function App() {
  return(
    <MyNavigator />
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
